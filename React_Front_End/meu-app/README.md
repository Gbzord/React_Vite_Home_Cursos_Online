# Cursos Online - Frontend React + Vite

Projeto de frontend em React para plataforma de cursos online, otimizado com **Vite** para melhor performance.

## 📋 Características

- **Vite**: Build tool ultra-rápido com HMR instantâneo
- **Estrutura de Componentes**: Cada componente possui seu arquivo CSS independente
- **Design Responsivo**: Layout adaptável para desktop, tablet e mobile
- **Componentes Implementados**:
  - Header com navegação
  - Banner principal com CTA
  - Seção "Minha Trilha" (Full Stack Developer)
  - Seção "Capacitação" com especialidades
  - Seção "Para Empresas"
  - Footer com links e redes sociais

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   ├── Banner/
│   │   ├── Banner.jsx
│   │   └── Banner.css
│   ├── MyPath/
│   │   ├── MyPath.jsx
│   │   └── MyPath.css
│   ├── Capabilities/
│   │   ├── Capabilities.jsx
│   │   └── Capabilities.css
│   ├── ForCompanies/
│   │   ├── ForCompanies.jsx
│   │   └── ForCompanies.css
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.css
├── styles/              # Estilos globais
│   └── globalStyles.css
├── App.js              # Componente principal
└── index.js            # Entry point

public/
└── index.html          # HTML template
```

## 🚀 Como Usar

### Instalação

```bash
cd meu-app
npm install
```

### Desenvolvimento (Vite Dev Server)

```bash
npm run dev
```

A aplicação abrirá em `http://localhost:3000` com HMR instantâneo!

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão em `/dist`

### Preview da Build

```bash
npm run preview
```

## 🎨 Design System

### Cores Principais
- **Primária**: `#0066ff` (Azul)
- **Fundo Claro**: `#f8f9fa` (Cinza Claro)
- **Texto Escuro**: `#1a1a1a` (Preto)
- **Texto Médio**: `#666` (Cinza)
- **Fundo Escuro**: `#0a0e27` (Azul Escuro)

### Tipografia
- **Fonte Principal**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Headings**: Peso 700
- **Body**: Peso 400-500

### Espaçamento
- Padding/Margin: 8px, 12px, 16px, 20px, 24px, 32px, 40px, 60px, 80px

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🔧 Tecnologias

- **React**: 19.2.7
- **Vite**: 5.1.0 (Build tool)
- **CSS3**: Flexbox, Grid, Animações
- **JavaScript**: ES6+, Modules nativas

## 📝 Convenções de Código

1. **Componentes**: Nomeados em PascalCase
2. **CSS**: Estrutura BEM modificada
3. **Arquivos**: 
   - JSX com extensão `.jsx`
   - CSS com extensão `.css`
4. **Importações**: CSS dentro de cada componente

## 🎯 Próximos Passos

- [ ] Adicionar páginas de cursos detalhadas
- [ ] Implementar sistema de autenticação
- [ ] Integrar API backend
- [ ] Adicionar animações mais avançadas
- [ ] Testes automatizados



