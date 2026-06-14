import { useEffect, useMemo, useState } from 'react'
import { FaMoon, FaSun, FaExclamationTriangle } from 'react-icons/fa'
import FiltroCausas from './components/FiltroCausas.jsx'
import BarraBusca from './components/BarraBusca.jsx'
import ListaOngs from './components/ListaOngs.jsx'
import ongs from './data/ongs.json'

function temaInicial() {
  const salvo = localStorage.getItem('tema')
  if (salvo === 'claro' || salvo === 'escuro') return salvo
  const prefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefereEscuro ? 'escuro' : 'claro'
}

// Normaliza texto para busca: minúsculas e sem acentos.
function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export default function App() {
  const [causaAtiva, setCausaAtiva] = useState('todas')
  const [busca, setBusca] = useState('')
  const [tema, setTema] = useState(temaInicial)

  useEffect(() => {
    document.documentElement.setAttribute('data-tema', tema)
    localStorage.setItem('tema', tema)
  }, [tema])

  function alternarTema() {
    setTema((atual) => (atual === 'escuro' ? 'claro' : 'escuro'))
  }

  // Quantas ONGs existem por causa (para os contadores das abas).
  const contagem = useMemo(() => {
    const mapa = { todas: ongs.length }
    for (const ong of ongs) {
      mapa[ong.causa] = (mapa[ong.causa] ?? 0) + 1
    }
    return mapa
  }, [])

  // Filtro por causa e busca por nome funcionando combinados.
  const ongsFiltradas = useMemo(() => {
    const termo = normalizar(busca.trim())
    return ongs.filter((ong) => {
      const bateCausa = causaAtiva === 'todas' || ong.causa === causaAtiva
      const bateBusca = termo === '' || normalizar(ong.nome).includes(termo)
      return bateCausa && bateBusca
    })
  }, [causaAtiva, busca])

  return (
    <div className="app">
      <header className="cabecalho">
        <div className="cabecalho-topo">
          <span className="marca">Catálogo de ONGs</span>
          <button
            type="button"
            className="botao-tema"
            onClick={alternarTema}
            aria-label={tema === 'escuro' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            title={tema === 'escuro' ? 'Tema claro' : 'Tema escuro'}
          >
            {tema === 'escuro' ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        <h1>Quem faz a diferença, perto de você.</h1>
        <p className="subtitulo">
          Organizações reunidas por causa, com um caminho direto para doar ou se
          voluntariar. Escolha uma causa, busque pelo nome e apoie.
        </p>
      </header>

      <main className="conteudo">
        <div className="controles">
          <BarraBusca valor={busca} onChange={setBusca} />
          <FiltroCausas
            causaAtiva={causaAtiva}
            onChange={setCausaAtiva}
            contagem={contagem}
          />
        </div>

        <p className="contador-resultados" aria-live="polite">
          {ongsFiltradas.length === 1
            ? '1 ONG encontrada'
            : `${ongsFiltradas.length} ONGs encontradas`}
        </p>

        <ListaOngs ongs={ongsFiltradas} />
      </main>

      <p className="aviso">
        <FaExclamationTriangle aria-hidden="true" />
        <span>
          As ONGs listadas são exemplos para fins de demonstração. Confira os
          dados e o site oficial de cada organização antes de doar ou se
          voluntariar.
        </span>
      </p>
    </div>
  )
}
