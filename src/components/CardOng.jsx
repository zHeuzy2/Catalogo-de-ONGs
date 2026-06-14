import { FaHeart, FaHandsHelping, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'
import { obterCausa } from '../data/causas.js'

export default function CardOng({ ong }) {
  const causa = obterCausa(ong.causa)
  const Icone = causa.Icone

  return (
    <article className="card-ong" style={{ '--cor-causa': causa.cor }}>
      <div className="card-ong-topo">
        <span className="card-ong-tag">
          <Icone aria-hidden="true" />
          {causa.rotulo}
        </span>
        {ong.cidade && (
          <span className="card-ong-cidade">
            <FaMapMarkerAlt aria-hidden="true" />
            {ong.cidade}
          </span>
        )}
      </div>

      <h3 className="card-ong-nome">{ong.nome}</h3>
      <p className="card-ong-descricao">{ong.descricao}</p>

      {ong.site && (
        <a
          className="card-ong-site"
          href={ong.site}
          target="_blank"
          rel="noopener noreferrer"
        >
          Site oficial
          <FaArrowRight aria-hidden="true" />
        </a>
      )}

      <div className="card-ong-acoes">
        {ong.linkDoar && (
          <a
            className="botao botao-doar"
            href={ong.linkDoar}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaHeart aria-hidden="true" />
            Doar
          </a>
        )}
        {ong.linkVoluntariar && (
          <a
            className="botao botao-voluntariar"
            href={ong.linkVoluntariar}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaHandsHelping aria-hidden="true" />
            Voluntariar
          </a>
        )}
      </div>
    </article>
  )
}
