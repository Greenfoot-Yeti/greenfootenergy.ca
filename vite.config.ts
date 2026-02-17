import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fallbackImagesPlugin } from './vite-plugin-fallback-images.js';

export default defineConfig({
  plugins: [fallbackImagesPlugin(), react(), tailwindcss()],
  root: 'client',
  build: {
    outDir: '../dist/public',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@assets': path.resolve(__dirname, './client/src/assets'),
    },
  },
});
