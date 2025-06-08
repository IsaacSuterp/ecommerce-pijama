/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Garante que o Tailwind leia todos os nossos arquivos
  ],
  theme: {
    extend: {
      // Adicionando nossa paleta de cores de luxo
      colors: {
        'off-white': '#F7F5F2',
        'pearl-gray': '#D3D3D3',
        'taupe': '#BDB7AB',
        'soft-gold': '#C9B08A',
        'navy-deep': '#1C2D4A',
        'graphite': '#333333',
      },
      // Adicionando nossas fontes elegantes
      fontFamily: {
        serif: ['Playfair Display', 'serif'], // Para títulos
        sans: ['Lato', 'sans-serif'],        // Para textos corridos
      },
    },
  },
  plugins: [],
}