import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // For GitHub Pages: https://ken4droidph.github.io/nbay/
  // Use base "/nbay/" only for production build so local dev stays at "/".
  base: command === 'build' ? '/nbay/' : '/',
}));
