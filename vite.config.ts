
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    // Safely inject the API_KEY from the environment, defaulting to an empty string to prevent build crashes
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: './index.html',
    },
  },
  server: {
    port: 3000,
  }
});
