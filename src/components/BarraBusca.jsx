import { FaSearch, FaTimes } from 'react-icons/fa'

export default function BarraBusca({ valor, onChange }) {
  return (
    <div className="barra-busca">
      <FaSearch className="barra-busca-icone" aria-hidden="true" />
      <input
        type="search"
        className="barra-busca-input"
        placeholder="Buscar ONG pelo nome..."
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Buscar ONG pelo nome"
      />
      {valor && (
        <button
          type="button"
          className="barra-busca-limpar"
          onClick={() => onChange('')}
          aria-label="Limpar busca"
          title="Limpar busca"
        >
          <FaTimes />
        </button>
      )}
    </div>
  )
}
