// src/assets/images/index.ts

// Importamos cada imagem como uma variável
import colecaoMalha from './colecao-malha.jpg';
import colecaoLiganete from './colecao-liganete.jpg';
import colecaoCamisola from './colecao-camisola.jpg';
import colecaoCurto from './colecao-curto.jpg';
import colecaoModal from './colecao-modal.jpg';
import colecaoPlush from './colecao-plush.jpg';

import produtoCamisola1 from './produto-camisola-1.jpg';
import produtoMalha1 from './produto-malha-1.jpg';
import produtoPlush1 from './produto-plush-1.jpg';
import produtoCurto1 from './produto-curto-1.jpg';
import produtoLiganete1 from './produto-liganete-1.jpg';
import produtoModal1 from './produto-modal-1.jpg';

import sobreHero from './sobre-hero.jpg';
import sobreDetalhe from './sobre-detalhe.jpg';

// A CORREÇÃO ESTÁ AQUI 👇
// 1. Adicionamos a "assinatura de índice" `[key: string]: string;` para dizer ao TypeScript
//    que este objeto pode ser acessado com qualquer chave do tipo string.
// 2. Colocamos as chaves entre aspas para que correspondam EXATAMENTE às strings do back-end.
export const images: { [key: string]: string } = {
  'colecao-malha': colecaoMalha,
  'colecao-liganete': colecaoLiganete,
  'colecao-camisola': colecaoCamisola,
  'colecao-curto': colecaoCurto,
  'colecao-modal': colecaoModal,
  'colecao-plush': colecaoPlush,
  'produto-camisola-1': produtoCamisola1,
  'produto-malha-1': produtoMalha1,
  'produto-plush-1': produtoPlush1,
  'produto-curto-1': produtoCurto1,
  'produto-liganete-1': produtoLiganete1,
  'produto-modal-1': produtoModal1,
  'sobre-hero': sobreHero,
  'sobre-detalhe': sobreDetalhe,
};