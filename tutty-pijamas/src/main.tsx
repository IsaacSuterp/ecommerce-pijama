// src/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' // Verifique se a extensão está .tsx
import './index.css'

// Encontramos o elemento root
const rootElement = document.getElementById('root');

// Adicionamos uma verificação: só tentamos renderizar se o elemento existir.
// Isso satisfaz o TypeScript e torna nosso código mais robusto.
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} else {
  console.error("Falha ao encontrar o elemento root. O app não pode ser montado.");
}