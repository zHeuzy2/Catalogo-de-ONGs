# Catálogo de ONGs Locais 🤝

Um catálogo simples que reúne organizações não governamentais por **causa** — animais, educação, meio ambiente, saúde e assistência social — com descrição, cidade e links diretos para **doar** ou **ser voluntário**. A ideia é diminuir o atrito entre querer ajudar e encontrar onde ajudar: tudo em uma página, sem cadastro e sem back-end.

![licença MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-2e9e5b)
![React + Vite](https://img.shields.io/badge/React-Vite-3f7cc9)

## Demo

> 🔗 Adicione aqui o link da demo ao vivo (Vercel ou GitHub Pages) depois de publicar.

<!-- Substitua pelo print ou GIF da aplicação -->
<!-- ![Screenshot do Catálogo de ONGs](docs/screenshot.png) -->

## Funcionalidades

- Lista de ONGs carregada a partir de um arquivo `ongs.json` local.
- Grade de cards responsiva (1 coluna no celular, 2–3 no desktop).
- Cada card mostra nome, causa (com ícone e cor), cidade, descrição curta e botões **Doar** e **Voluntariar**.
- **Filtro por causa** em abas, com contador por categoria e a opção "Todas".
- **Busca por nome** em tempo real, sem diferenciar acentos ou maiúsculas.
- Filtro e busca funcionam **combinados**.
- Estado vazio amigável quando nada corresponde aos filtros.
- Links de doar/voluntariar abrem em nova aba (`target="_blank"` + `rel="noopener noreferrer"`).
- Tema claro e escuro, com a preferência salva no navegador.

## Como adicionar uma ONG

Os dados ficam em [`src/data/ongs.json`](src/data/ongs.json). Para incluir uma organização, adicione um objeto ao array seguindo este formato:

```json
{
  "id": 13,
  "nome": "Nome da ONG",
  "causa": "meio-ambiente",
  "descricao": "Uma frase curta explicando o que a organização faz.",
  "cidade": "Cidade, UF",
  "site": "https://exemplo.org",
  "linkDoar": "https://exemplo.org/doar",
  "linkVoluntariar": "https://exemplo.org/voluntariar"
}
```

Regras rápidas:

- `id` precisa ser único.
- `causa` deve usar um dos slugs cadastrados: `animais`, `educacao`, `meio-ambiente`, `saude` ou `assistencia-social`. Os rótulos, cores e ícones de cada causa ficam em [`src/data/causas.js`](src/data/causas.js) — adicione uma nova entrada lá se quiser criar uma causa.
- `site`, `linkDoar` e `linkVoluntariar` são opcionais; o card oculta o botão correspondente quando o link não é informado.

Contribuições são bem-vindas! Veja o [guia de contribuição](CONTRIBUTING.md).

## Como rodar localmente

Precisa do [Node.js](https://nodejs.org/) 18 ou superior.

```bash
git clone https://github.com/seu-usuario/catalogo-ongs.git
cd catalogo-ongs
npm install
npm run dev
```

Abra o endereço que o terminal mostrar (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build     # gera a pasta dist/
npm run preview   # pré-visualiza a build
```

## Tecnologias usadas

- **React + Vite** — interface e build.
- **react-icons** — ícones.
- **CSS puro** — sem framework de UI, para manter o projeto leve.
- Estado com `useState` e `useMemo`. Os dados vêm de um JSON local: **não há back-end**.

## ⚠️ Aviso sobre os dados

As ONGs deste catálogo são exemplos para fins de demonstração e portfólio. Antes de doar ou se voluntariar, **confira os dados e acesse o site oficial** de cada organização para confirmar que os links e as informações estão corretos e atualizados.

## Por que não usar uma API de ONGs?

Existem APIs públicas de organizações sem fins lucrativos, como [GlobalGiving Atlas](https://www.globalgiving.org/atlas/), [Every.org](https://docs.every.org/docs/endpoints/nonprofit-search) e [ProPublica Nonprofit Explorer](https://projects.propublica.org/nonprofits/api). Elas, porém, exigem chave de API (que pediria um back-end ou proxy para não expor credenciais) e focam em nonprofits dos EUA ou globais, não em ONGs locais. Por isso o projeto usa um `ongs.json` local, fácil de manter e de receber contribuições. Integrar uma dessas APIs fica como extensão futura.

## Deploy

**Vercel:** importe o repositório. O framework é detectado como Vite (build `npm run build`, saída `dist`).

**GitHub Pages:** ajuste `base` no `vite.config.js` para `'/catalogo-ongs/'`, rode o build e publique a pasta `dist/`.

## Licença

MIT. Veja o arquivo [LICENSE](LICENSE).
