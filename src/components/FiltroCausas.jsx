import { FaThLarge } from 'react-icons/fa'
import { LISTA_CAUSAS } from '../data/causas.js'

export default function FiltroCausas({ causaAtiva, onChange, contagem }) {
  function aba(slug, rotulo, Icone, cor) {
    const ativo = causaAtiva === slug
    const total = contagem?.[slug] ?? 0
    return (
      <button
        key={slug}
        type="button"
        className={`filtro-aba${ativo ? ' ativo' : ''}`}
        onClick={() => onChange(slug)}
        aria-pressed={ativo}
        style={ativo && cor ? { '--cor-aba': cor } : undefined}
      >
        <Icone aria-hidden="true" />
        <span>{rotulo}</span>
        <span className="filtro-aba-contagem">{total}</span>
      </button>
    )
  }

  return (
    <div className="filtro-causas" role="group" aria-label="Filtrar por causa">
      {aba('todas', 'Todas', FaThLarge, '#1c2530')}
      {LISTA_CAUSAS.map((c) => aba(c.slug, c.rotulo, c.Icone, c.cor))}
    </div>
  )
}
