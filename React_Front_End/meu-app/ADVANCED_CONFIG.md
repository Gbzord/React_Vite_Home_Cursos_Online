# 🔧 Configurações Avançadas (Opcional)

## ESLint + Prettier (Optional)

Se deseja adicionar linting e formatação:

```bash
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-react
```

### .eslintrc.json
```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["react"],
  "rules": {
    "react/react-in-jsx-scope": "off"
  }
}
```

### .prettierrc
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

---

## Environment Variables

Se precisar de variáveis de ambiente:

### .env.local
```
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=Cursos Online
```

### Uso em src/
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Roteamento (React Router)

Para adicionar múltiplas páginas:

```bash
npm install react-router-dom
```

### src/App.js (com router)
```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Courses />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
```

---

## State Management (Zustand)

Para gerenciar estado global (alternativa mais leve que Redux):

```bash
npm install zustand
```

### src/store/courseStore.js
```javascript
import { create } from 'zustand';

export const useCourseStore = create((set) => ({
  courses: [],
  setCourses: (courses) => set({ courses }),
}));
```

---

## HTTP Client (Axios)

Para requisições à API:

```bash
npm install axios
```

### src/api/client.js
```javascript
import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
```

---

## Animações Avançadas

### Usar Framer Motion
```bash
npm install framer-motion
```

```javascript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Conteúdo
</motion.div>
```

---

## Icons Library

### React Icons
```bash
npm install react-icons
```

```javascript
import { FaReact, FaNode } from 'react-icons/fa';

<FaReact size={32} />
```

---

## Deploy Checklist

### Antes de fazer deploy:

- [ ] Executar `npm run build`
- [ ] Verificar se `/dist` foi criado
- [ ] Testar build com `npm run preview`
- [ ] Remover `console.log()` de debug
- [ ] Verificar variáveis de ambiente
- [ ] Testar em navegadores diferentes
- [ ] Validar responsividade
- [ ] Lighthouse score > 90

### Deploy em Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy em Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

---

## GitHub Actions (CI/CD)

### .github/workflows/deploy.yml
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run preview
```

---

## Performance Optimization

### Lazy Loading de Componentes
```javascript
import { lazy, Suspense } from 'react';

const Banner = lazy(() => import('./components/Banner/Banner'));

<Suspense fallback={<div>Carregando...</div>}>
  <Banner />
</Suspense>
```

### Image Optimization
Use formatos WebP:
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Descrição">
</picture>
```

---

## Segurança

- [ ] Sempre usar HTTPS em produção
- [ ] Validar inputs do usuário
- [ ] Sanitizar conteúdo HTML
- [ ] Usar CSP headers
- [ ] Manter dependências atualizadas

```bash
# Verificar vulnerabilidades
npm audit
npm audit fix
```

---

## Monitoramento

### Sentry (Error Tracking)
```bash
npm install @sentry/react @sentry/tracing
```

### Google Analytics
```bash
npm install react-ga4
```

---

## Certificado SSL

Para HTTPS local (desenvolvimento):

```bash
# Gerar certificado auto-assinado
openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365
```

---

## Troubleshooting Avançado

### Vite não inicia
```bash
# Limpar cache
rm -rf node_modules .vite dist
npm install
npm run dev
```

### Módulos não encontrados
```bash
# Verificar imports
# Usar caminhos relativos ou aliases

# vite.config.js
import { fileURLToPath } from 'node:url'

export default {
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}
```

---

## Recursos Úteis

- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/)
- [Web.dev](https://web.dev/)

---

**Dicas profissionais para levar seu projeto adiante!** 🚀
