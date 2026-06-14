import { FaSearchMinus } from 'react-icons/fa'
import CardOng from './CardOng.jsx'

export default function ListaOngs({ ongs }) {
  if (ongs.length === 0) {
    return (
      <div className="estado-vazio">
        <FaSearchMinus className="estado-vazio-icone" aria-hidden="true" />
        <h2>Nenhuma ONG encontrada</h2>
        <p>
          Não achamos nenhuma organização com esses filtros. Tente outra causa
          ou ajuste o termo da busca.
        </p>
      </div>
    )
  }

  return (
    <div className="lista-ongs">
      {ongs.map((ong) => (
        <CardOng key={ong.id} ong={ong} />
      ))}
    </div>
  )
}
