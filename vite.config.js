import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pomodoro/',
  server: {
    proxy: {
      '/api': {
        target: 'https://zenquotes.io',
        changeOrigin: true,
        // Remove the rewrite rule to preserve the full path
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});