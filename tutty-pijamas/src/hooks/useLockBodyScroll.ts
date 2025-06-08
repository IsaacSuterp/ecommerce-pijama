// src/hooks/useLockBodyScroll.ts

import { useLayoutEffect } from 'react';

// Este é um custom hook para travar a rolagem do body
export function useLockBodyScroll(): void {
  // useLayoutEffect é executado de forma síncrona após todos os cálculos de layout do DOM.
  // É o ideal para manipulações diretas do DOM como esta.
  useLayoutEffect((): (() => void) => {
    // Pega o valor original do overflow do body
    const originalStyle: string = window.getComputedStyle(document.body).overflow;
    
    // Aplica o bloqueio de rolagem
    document.body.style.overflow = 'hidden';
    
    // Esta função de retorno é a "função de limpeza".
    // Ela será executada quando o componente que usa o hook for "desmontado" (deixar de existir).
    return () => (document.body.style.overflow = originalStyle);
  }, []); // O array vazio [] garante que o efeito só rode na montagem e desmontagem.
}