import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
  plugins: [
    vue(),
    federation({
            name: 'remote_vue_app',
            filename: 'remoteEntry.js',
            // Modules to expose
            exposes: {
                './VueButton': './src/components/HelloWorld.vue',
            },
            shared: ['vue']
        })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
