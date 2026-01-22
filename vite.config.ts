
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    // Injects the environment variable from the build process into the browser code
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',
    },
  },
  server: {
    port: 3000,
  }
});
