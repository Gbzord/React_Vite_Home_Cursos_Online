# 🚀 Guia de Inicialização Rápida

## ⚡ Quick Start (5 minutos)

### 1. Navegar para o diretório
```bash
cd c:\Users\36129382024.1n\React_Front_End\meu-app
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Iniciar servidor de desenvolvimento
```bash
npm run dev
```

A aplicação abrirá automaticamente em: **http://localhost:3000**

⚡ **Com Vite** - HMR instantâneo!

---

## 📦 Estrutura de Pastas com Vite

```
meu-app/
├── index.html              ✅ Raiz do projeto (Vite)
├── vite.config.js          ✅ Configuração Vite
├── package.json            ✅ Atualizado para Vite
│
├── public/
│   ├── favicon.ico
│   ├── manifest.json
│   └── index.html          ⚠️ (Legado - usar /index.html)
│
├── src/
│   ├── components/
│   │   ├── Header/ (Header.jsx + Header.css)
│   │   ├── Banner/ (Banner.jsx + Banner.css)
│   │   ├── MyPath/ (MyPath.jsx + MyPath.css)
│   │   ├── Capabilities/ (Capabilities.jsx + Capabilities.css)
│   │   ├── ForCompanies/ (ForCompanies.jsx + ForCompanies.css)
│   │   └── Footer/ (Footer.jsx + Footer.css)
│   │
│   ├── styles/
│   │   ├── globalStyles.css
│   │   └── colors.css
│   │
│   ├── App.js              ✅ Atualizado
│   └── index.js            ✅ Atualizado
│
├── dist/                   ✅ (Gerado após build)
├── README.md               ✅ Atualizado
└── COMPONENTS.md           ✅ Novo
```

---

## ✨ Componentes Implementados

1. **Header** - Barra de navegação com logo e botão de login
2. **Banner** - Seção hero com título, descrição e CTAs
3. **MyPath** - Card da trilha "Full Stack Developer"
4. **Capabilities** - Grid com 5 especialidades
5. **ForCompanies** - Seção corporativa com imagem do dashboard
6. **Footer** - Rodapé com links e informações

---

## 🎨 Recursos Principais

✅ **CSS Estruturado**: Cada componente tem seu próprio arquivo CSS  
✅ **Responsivo**: Desktop, Tablet, Mobile  
✅ **Animações**: Transições suaves e efeitos hover  
✅ **Vite**: Build tool ultra-rápido com HMR
✅ **Figma-Ready**: Design seguindo rigorosamente o Figma fornecido  
✅ **Performance**: Otimizado para produção  

---

## 🔧 Comandos Úteis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia dev server com HMR (porta 3000) |
| `npm start` | Alias para `npm run dev` |
| `npm run build` | Cria build otimizado em `/dist` |
| `npm run preview` | Visualiza a build de produção |

---

## 🌐 URLs e Navegação

- **Home**: http://localhost:3000
- **Cursos**: #cursos
- **Empresas**: #empresas
- **Certificações**: #certificacoes
- **Departamentos**: #departamentos

---

## 💡 Próximas Etapas Sugeridas

1. **Customizar cores** - Editar variáveis em `globalStyles.css`
2. **Adicionar imagens** - Substituir placeholders em `Banner` e `ForCompanies`
3. **Integrar API** - Conectar ao backend em `App.jsx`
4. **Adicionar rotas** - Instalar `react-router-dom` para múltiplas páginas
5. **Implementar CMS** - Para conteúdo dinâmico de cursos

---

## ❓ Troubleshooting

### Erro: "Cannot find module"
```bash
npm install --legacy-peer-deps
```

### Porta 3000 já em uso
```bash
npm start -- --port 3001
```

### Limpar cache
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

---

## 📝 Notas Importantes

- O projeto usa **React 19.2.7** + **Vite 5.1.0**
- CSS é importado diretamente em cada componente
- Vite oferece HMR (Hot Module Replacement) instantâneo
- Sem uso de CSS-in-JS (styled-components, etc.)
- Compatível com todos os navegadores modernos
- Para mais detalhes sobre Vite, veja `VITE_MIGRATION.md`

---

**Projeto otimizado com Vite pronto para uso!** ⚡
