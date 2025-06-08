// src/api/products.ts

import type { Product } from '../types';

const API_URL = 'http://localhost:4000/api';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error(`Falha ao buscar produtos da API. Status: ${response.status}`);
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
};

export const fetchProductById = async (id: string): Promise<Product | null> => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`Falha ao buscar o produto. Status: ${response.status}`);
    }
    const data: Product = await response.json();
    return data;
  } catch (error) {
    console.error(`Erro ao buscar produto com ID ${id}:`, error);
    return null;
  }
};

// AQUI ESTÁ A NOVA FUNÇÃO 👇
// Ela busca produtos filtrados por coleção
export const fetchProductsByCollection = async (slug: string): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/collections/${slug}/products`);
    if (!response.ok) {
      throw new Error(`Falha ao buscar produtos da coleção. Status: ${response.status}`);
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error(`Erro ao buscar produtos da coleção ${slug}:`, error);
    return [];
  }
};