// src/components/ScrollToTop.tsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Este componente não renderiza nada visualmente (retorna null).
// Sua única função é executar um efeito colateral: rolar a página para o topo.
function ScrollToTop() {
  // O hook useLocation nos dá acesso ao objeto de localização atual.
  // Nós pegamos o 'pathname', que é a parte da URL após o domínio (ex: /colecoes/malha).
  const { pathname } = useLocation();

  // O hook useEffect executa uma função sempre que um de seus valores de dependência muda.
  // Aqui, ele vai rodar toda vez que o 'pathname' for alterado.
  useEffect(() => {
    // A mágica acontece aqui: isso rola a janela para as coordenadas (0, 0), ou seja, o topo.
    window.scrollTo(0, 0);
  }, [pathname]); // O array de dependências com 'pathname'

  // Como não há nada para ser renderizado, retornamos null.
  return null;
}

export default ScrollToTop;