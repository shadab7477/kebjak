import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    
  outDir: path.resolve(import.meta.dirname, "client/dist"),
    emptyOutDir: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-core': ['react', 'react-dom'],
          'ui-components': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-toast'
          ],
          'form-utils': [
            'react-hook-form',
            'zod',
            '@hookform/resolvers'
          ],
          'icons': [
            'lucide-react',
            '@tabler/icons-react'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 2000,
    sourcemap: false,
    cssCodeSplit: true,
    assetsInlineLimit: 6096,
    target: 'esnext'
  },
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    watch: {
      usePolling: true,
    },
    allowedHosts: ["kenjaccreations-f4efetf6dhb5dgfx.canadacentral-01.azurewebsites.net", "localhost", "127.0.0.1"],
    hmr: {
      overlay: false
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-toast'
    ]
  },
  css: {
    devSourcemap: false
  }
});
