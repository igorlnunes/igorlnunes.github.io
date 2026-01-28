# 🎯 ATS & Recrutador - Checklist de Manutenção

## 📋 Antes de Enviar seu Portfolio para Recrutadores

### ✅ Validação Técnica

- [ ] Validar HTML: https://validator.w3.org/
- [ ] Validar JSON-LD: https://validator.schema.org/
- [ ] Validar JSON Resume: https://jsonresume.org/validator/
- [ ] Testar Open Graph: https://ogp.me/
- [ ] Checar Links: https://www.brokenlinkcheck.com/

### ✅ SEO & Descoberta

- [ ] Google Search Console: Submeter sitemap
- [ ] Google Search Console: Verificar impressões
- [ ] Configurar Google Analytics
- [ ] Testar busca no Google: "seu nome" + "developer"
- [ ] Verificar aparição no LinkedIn

### ✅ ATS Compatibilidade

- [ ] Testar em simular ATS: https://www.jobscan.co/
- [ ] Verificar extração de resume.json
- [ ] Testar leitura de texto simples
- [ ] Validar estrutura HTML semântica

### ✅ Mobile & Performance

- [ ] Testar em mobile: Chrome DevTools
- [ ] PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Lighthouse Report
- [ ] Teste de acessibilidade: axe DevTools

---

## 📝 Manutenção Contínua

### Quando Adicionar Novo Projeto

1. **Adicionar em `index.html`**:
   ```html
   <div class="work__box">
     <div class="work__text">
       <h3>Nome do Projeto</h3>
       <p>Descrição clara e concisa</p>
       <ul class="work__list">
         <li>Tecnologia 1</li>
         <li>Tecnologia 2</li>
       </ul>
       <div class="work__links">
         <a href="url-demo" class="link__text">Visite o Site <span>&rarr;</span></a>
         <a href="url-repo" target="_blank">
           <img src="./images/github.svg" class="work__code" alt="GitHub">
         </a>
       </div>
     </div>
     <div class="work__image-box">
       <img src="./images/seu-projeto.gif" class="work__image" alt="Seu Projeto">
     </div>
   </div>
   ```

2. **Atualizar `resume.json`**:
   ```json
   {
     "name": "Nome do Projeto",
     "description": "Descrição completa",
     "startDate": "2024-01",
     "url": "link-da-demo",
     "repository": "link-do-github",
     "technologies": ["React", "TypeScript", "..."],
     "keywords": ["keyword1", "keyword2"]
   }
   ```

3. **Atualizar `README.md`**:
   - Adicionar seção do projeto
   - Adicionar link para demo e repo
   - Descrever features e tecnologias

4. **Adicionar imagem**:
   - Colocar em `images/` folder
   - Tamanho recomendado: 1366x767px
   - Formato: GIF para animações, PNG/JPG para estática

---

## 🔄 Quando Expandir Skills

### Adicionar Nova Categoria de Skills

1. **Em `index.html`** (seção skills):
   ```html
   <div class="skills__group">
     <h3>Nova Categoria</h3>
     <ul class="skills__list">
       <li><strong>Tecnologia 1</strong> - Descrição breve</li>
       <li><strong>Tecnologia 2</strong> - Descrição breve</li>
     </ul>
   </div>
   ```

2. **Em `resume.json`** (array skills):
   ```json
   {
     "name": "Nome da Categoria",
     "level": "Expert|Advanced|Intermediate|Beginner",
     "keywords": ["keyword1", "keyword2", "..."]
   }
   ```

---

## 🌍 Otimizações Periódicas

### Mensal
- [ ] Revisar Google Analytics
- [ ] Checar links externos
- [ ] Atualizar data em `CHANGES_SUMMARY.md`
- [ ] Procurar por oportunidades de conteúdo

### Trimestral
- [ ] Revisar SEO keywords
- [ ] Atualizar descrição se houver novas skills
- [ ] Testar em browsers modernos
- [ ] Validar todos os schemas

### Anualmente
- [ ] Revisão completa do portfolio
- [ ] Atualizar template/design se necessário
- [ ] Revisar README e documentação
- [ ] Considerar novo projeto destaque

---

## 🚨 Troubleshooting

### Problema: ATS não consegue ler o resume.json

**Solução**:
```bash
# Validar JSON
python3 -m json.tool resume.json

# Adicionar Content-Type correto no servidor (se necessário)
# Adicionar accept header no HTML
```

### Problema: Schema.org não aparece no Google

**Solução**:
1. Testar em https://validator.schema.org/
2. Submeter em Google Search Console
3. Verificar se JSON-LD está no `<head>`
4. Aguardar 24-48h para indexação

### Problema: Imagens não carregam no ATS

**Solução**:
- ATS geralmente não processa imagens
- Sempre coloque descrições em `alt` attributes
- Certifique-se que informações críticas não estão só em imagens

### Problema: Keywords não aparecem em buscas

**Solução**:
1. Verificar posicionamento em Google Search Console
2. Otimizar meta description
3. Adicionar mais conteúdo relevante
4. Criar backlinks (compartilhar no LinkedIn/GitHub)
5. Aguardar indexação completa (pode levar meses)

---

## 📊 Métricas Para Acompanhar

### Google Analytics
- Sessions por mês
- Bounce rate
- Tempo médio na página
- Referrer sources (onde as pessoas vêm)

### Google Search Console
- Impressões (quantas vezes aparece em buscas)
- Click-through rate (CTR)
- Posição média (ranking)
- Queries principais (que buscas te encontram)

### Objetivo
```
📈 Alvo: +10% impressões a cada trimestre
📈 Alvo: +5% CTR a cada trimestre
📈 Alvo: +20% sessões a cada trimestre
```

---

## 🔗 Links Úteis Para Referência

### Validação
- Schema.org Validator: https://validator.schema.org/
- HTML Validator: https://validator.w3.org/
- JSON Validator: https://jsonlint.com/
- Open Graph Tester: https://ogp.me/

### Otimização
- Google PageSpeed: https://pagespeed.web.dev/
- Google Search Console: https://search.google.com/search-console/
- ATS Simulator: https://www.jobscan.co/
- Lighthouse: https://developers.google.com/web/tools/lighthouse

### Recursos
- JSON Resume: https://jsonresume.org/
- Schema.org: https://schema.org/
- Open Graph: https://ogp.me/
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/

---

## ✉️ Mensagens Para Recrutadores

Quando enviar seu portfolio:

```
Olá [Nome do Recrutador],

Estou disponível para oportunidades de desenvolvimento front-end. 
Meu portfolio completo com projetos, habilidades e dados estruturados 
está disponível em: [seu-url]

Também tenho um arquivo resume.json estruturado para importação em ATS:
[seu-url]/resume.json

Principais tecnologias:
✓ React.js, Angular, TypeScript
✓ Google Gemini AI Integration
✓ Blockchain & Web3
✓ Responsive Design & Accessibility

Fico disponível para conversar sobre oportunidades!

Atenciosamente,
Igor
```

---

## 🎯 Meta Final

Seu portfolio agora é um ativo profissional que:
- ✅ ATS conseguem parsear automaticamente
- ✅ Recrutadores encontram facilmente
- ✅ Aparece em buscas relevantes
- ✅ Apresenta informações de forma profissional
- ✅ Pode ser compartilhado facilmente

**Use-o estrategicamente em suas candidaturas!** 🚀

---

*Última atualização: 28 de janeiro de 2026*
