// tutty-pijamas-backend/src/index.ts

import express, { Request, Response } from 'express';
import cors from 'cors';
import { fetchProducts } from './mock'; 

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// --- NOSSOS ENDPOINTS DA API ---

app.get('/', (req: Request, res: Response) => {
  res.send('API da Tutty Pijamas está no ar!');
});

app.get('/api/products', async (req: Request, res: Response) => {
  try {
    const products = await fetchProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produtos' });
  }
});

app.get('/api/products/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const allProducts = await fetchProducts();
    const product = allProducts.find(p => p.id === Number(id));
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar o produto' });
  }
});

// AQUI ESTÁ O NOVO ENDPOINT DE COLEÇÕES 👇
app.get('/api/collections/:slug/products', async (req: Request, res: Response) => {
  try {
    const { slug } = req.params; // Pegamos o 'slug' da coleção da URL
    const allProducts = await fetchProducts();

    // Filtramos os produtos para encontrar apenas os da coleção correspondente
    const collectionProducts = allProducts.filter(p => p.collectionSlug === slug);

    // Retornamos a lista de produtos da coleção (pode ser um array vazio, o que está correto)
    res.status(200).json(collectionProducts);

  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produtos da coleção' });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Servidor da Tutty Pijamas rodando na porta ${PORT}`);
});