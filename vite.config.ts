import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcss from 'postcss';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ReactJSRalph2/',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  server: {
    port: 5173,  
  },
});
