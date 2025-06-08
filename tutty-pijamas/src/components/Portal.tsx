// src/components/Portal.tsx

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  selector: string;
}

const Portal: React.FC<PortalProps> = ({ children, selector }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    // Retornamos uma função de limpeza vazia
    return () => {};
  }, []);
  
  // Se o componente ainda não montou no lado do cliente, não renderizamos nada.
  // Isso evita erros durante a renderização no lado do servidor (Server-Side Rendering).
  if (!mounted) {
    return null;
  }
  
  // Usamos o createPortal para teletransportar os 'children' para o elemento
  // com o seletor de ID que passamos (ex: '#menu-root').
  return createPortal(
    children,
    document.querySelector(selector) as HTMLElement
  );
};

export default Portal;