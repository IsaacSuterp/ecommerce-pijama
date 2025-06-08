// tutty-pijamas-backend/src/mock.ts

interface Product {
 id: number;
 name: string;
 price: number;
 images: string[]; // Agora enviaremos os nomes dos arquivos
 tag: string | null;
 collectionSlug: string;
 description: string;
 sizes: string[];
}

const mockProducts: Product[] = [
 {
   id: 1,
   name: 'Camisola de Seda Clássica',
   price: 499.90,
   // Enviamos o nome do arquivo local (sem a extensão)
   images: ['produto-camisola-1'],
   tag: 'Lançamento',
   collectionSlug: 'camisola',
   description: 'Elegância atemporal em seda pura. Com um toque suave e caimento perfeito, esta camisola oferece o máximo de conforto e sofisticação para suas noites.',
   sizes: ['P', 'M', 'G'],
 },
 {
   id: 2,
   name: 'Conjunto Confort de Malha',
   price: 289.90,
   images: ['produto-malha-1'],
   tag: null,
   collectionSlug: 'malha',
   description: 'O abraço que você merece no final do dia. Feito com a melhor malha de algodão, este conjunto é sinônimo de conforto e noites de sono tranquilas.',
   sizes: ['P', 'M', 'G', 'GG'],
 },
 {
   id: 3,
   name: 'Robe de Plush Aconchegante',
   price: 359.90,
   images: ['produto-plush-1'],
   tag: 'Mais Vendido',
   collectionSlug: 'plush',
   description: 'Perfeito para manhãs frias ou para relaxar no sofá. Nosso robe de plush é extremamente macio, quente e aconchegante.',
   sizes: ['Tamanho Único'],
 },
 {
   id: 4,
   name: 'Pijama Curto de Verão',
   price: 259.90,
   images: ['produto-curto-1'],
   tag: null,
   collectionSlug: 'curto',
   description: 'Leveza e frescor para as noites mais quentes, sem abrir mão do estilo. Toque suave e design moderno.',
   sizes: ['P', 'M', 'G'],
 },
 {
   id: 5,
   name: 'Pijama de Liganete Leve',
   price: 279.90,
   images: ['produto-liganete-1'],
   tag: null,
   collectionSlug: 'liganete',
   description: 'A liganete oferece um caimento fluido e um toque geladinho, ideal para noites de verão com elegância.',
   sizes: ['P', 'M', 'G', 'GG'],
 },
 {
   id: 6,
   name: 'Conjunto em Modal Premium',
   price: 429.90,
   images: ['produto-modal-1'],
   tag: 'Novo',
   collectionSlug: 'modal',
   description: 'O tecido modal é conhecido por sua maciez extrema e propriedades respiráveis. Um luxo para sua pele.',
   sizes: ['P', 'M', 'G'],
 },
];

export const fetchProducts = (): Promise<Product[]> => {
 return new Promise((resolve) => {
   setTimeout(() => {
     resolve(mockProducts);
   }, 200);
 });
};