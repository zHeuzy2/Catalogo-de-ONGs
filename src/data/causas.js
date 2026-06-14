import {
  FaPaw,
  FaGraduationCap,
  FaLeaf,
  FaHeartbeat,
  FaHandshake,
  FaChild,
  FaUserFriends,
  FaFistRaised,
  FaRegCircle,
} from 'react-icons/fa'

// Metadados de cada causa: rótulo, ícone (react-icons/fa) e cor.
// A chave (slug) deve bater com o campo "causa" em ongs.json.
export const CAUSAS = {
  animais: {
    slug: 'animais',
    rotulo: 'Animais',
    Icone: FaPaw,
    cor: '#b9622b',
  },
  educacao: {
    slug: 'educacao',
    rotulo: 'Educação',
    Icone: FaGraduationCap,
    cor: '#2f5d8a',
  },
  'meio-ambiente': {
    slug: 'meio-ambiente',
    rotulo: 'Meio ambiente',
    Icone: FaLeaf,
    cor: '#3d7a3f',
  },
  saude: {
    slug: 'saude',
    rotulo: 'Saúde',
    Icone: FaHeartbeat,
    cor: '#b23a4b',
  },
  'assistencia-social': {
    slug: 'assistencia-social',
    rotulo: 'Assistência social',
    Icone: FaHandshake,
    cor: '#6b4f9e',
  },
  criancas: {
    slug: 'criancas',
    rotulo: 'Crianças',
    Icone: FaChild,
    cor: '#c47d0e',
  },
  idosos: {
    slug: 'idosos',
    rotulo: 'Idosos',
    Icone: FaUserFriends,
    cor: '#4a7c8e',
  },
  'direitos-humanos': {
    slug: 'direitos-humanos',
    rotulo: 'Direitos humanos',
    Icone: FaFistRaised,
    cor: '#8e3a3a',
  },
}

// Lista ordenada para montar as abas de filtro.
export const LISTA_CAUSAS = Object.values(CAUSAS)

// Fallback para quando uma ONG usar uma causa não cadastrada.
export const CAUSA_PADRAO = {
  slug: 'outras',
  rotulo: 'Outras',
  Icone: FaRegCircle,
  cor: '#6b7280',
}

export function obterCausa(slug) {
  return CAUSAS[slug] ?? { ...CAUSA_PADRAO, slug: slug || 'outras' }
}
