# Igor Mateus de Lima Nunes | Portfólio de Governança de Dados

<div align="center">

[![Portfolio Website](https://img.shields.io/badge/Portfolio-igorlnunes.com-blue?style=for-the-badge)](https://igorlnunes.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-igorlnunes-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/igorlnunes/)
[![GitHub](https://img.shields.io/badge/GitHub-igorlnunes-black?style=for-the-badge&logo=github)](https://github.com/igorlnunes)
[![Email](https://img.shields.io/badge/Email-igorlnunes%40gmail.com-red?style=for-the-badge)](mailto:igorlnunes@gmail.com)

</div>

---

## Sobre

Engenheiro em transição para **Governança de Dados**, com foco em **qualidade de dados**, **metadados e rastreabilidade**, **controle de acesso** e **privacidade (LGPD)**. O front-end (React, Angular, TypeScript) é um diferencial para construir portais, catálogos e dashboards de governança.

## Cases em destaque

| Case | Conceitos de governança |
|------|-------------------------|
| **PinVault** (cofre de documentos: IPFS + Smart Contract + Supabase) | Integridade, proveniência, controle de acesso (RLS), minimização de dados, direito ao apagamento |
| **Gestão de Salas de Aula** (Django + PostgreSQL) | Modelagem relacional, regras de integridade, definição de métricas/KPIs |

Outros projetos: Vestigen (IA generativa), consulta de saldo ERC20 (Rust) e upload no IPFS.

## Estrutura do repositório

- `index.html`: página única. Os textos visíveis são sobrescritos por `translations.json`.
- `translations.json`: conteúdo em PT-BR e EN (meta tags, hero, competências, cases, habilidades, sobre, experiência, contato).
- `i18n.js`: carrega as traduções e aplica no DOM (idioma padrão: PT-BR; preferência salva em `localStorage`).
- `resume.json`: currículo estruturado (formato JSON Resume).
- `index.css` / `index.js`: estilos e scripts.

### Como editar o conteúdo

1. Altere o texto em `translations.json` (PT e EN) e o texto de fallback em `index.html`.
2. Para novas habilidades, mantenha a **mesma ordem** dos itens no HTML e em `skills.groups` (a associação é por posição).
3. Para novos projetos, adicione o bloco `data-project-id` no HTML e a entrada correspondente em `work.projects`.
4. Mantenha `resume.json` consistente com o site.

## Executar localmente

```bash
python3 -m http.server 8000
# ou
npx http-server
```

Abra `http://localhost:8000`.

## Créditos do template

Template original de [Nisar Hassan Naqvi](https://nisar.dev) ([repositório](https://github.com/nisarhassan12/portfolio-template/)), adaptado e personalizado.

**Última atualização**: outubro de 2026
