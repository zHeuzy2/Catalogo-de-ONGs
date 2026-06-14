# Como contribuir

Obrigado pelo interesse em ajudar o **Catálogo de ONGs Locais**! Este projeto vive de colaboração — quanto mais ONGs confiáveis, melhor.

## Adicionar ou corrigir uma ONG

1. Faça um fork do repositório e crie um branch: `git checkout -b minha-ong`.
2. Edite [`src/data/ongs.json`](src/data/ongs.json) seguindo o formato descrito no [README](README.md#como-adicionar-uma-ong).
3. Garanta que:
   - O `id` é único.
   - A `causa` usa um dos slugs cadastrados em [`src/data/causas.js`](src/data/causas.js).
   - Os links (`site`, `linkDoar`, `linkVoluntariar`) abrem corretamente.
   - A `descricao` é curta, objetiva e neutra.
4. Rode `npm run dev` e confira o card na interface.
5. Abra um Pull Request explicando a ONG e citando a fonte/site oficial.

## Critérios para inclusão

- A organização deve ser real, ativa e ter presença oficial verificável (site, redes ou registro).
- Evite linguagem promocional exagerada; descreva o que a ONG faz.
- Prefira links oficiais de doação e voluntariado.

## Padrões de código

- Mantenha o estilo existente (CSS puro, componentes em português, sem dependências extras de UI).
- Antes de enviar, rode `npm run build` para garantir que o projeto compila sem erros.

## Reportar problemas

Encontrou um link quebrado ou uma informação desatualizada? Abra uma issue descrevendo o problema e, se possível, a correção.
