import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
import federation from "@originjs/vite-plugin-federation";
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'remote_react_app',
            filename: 'remoteEntry.js',
            // Modules to expose
            exposes: {
                './Button': './src/Button',
            },
            shared: ['react', 'react-dom']
        })
    ],
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false
    }
});

