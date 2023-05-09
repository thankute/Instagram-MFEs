import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      federation({
            name: 'host_react_app',
            remotes: {
                remoteReactApp: "http://localhost:3002/assets/remoteEntry.js",
                remoteVueApp: "http://localhost:3001/assets/remoteEntry.js",
            },
            shared: ['react', 'react-dom', 'vue']
        })
  
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
