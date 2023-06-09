import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({mode}) => { 
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
  server: {
    proxy: {
      '/api': {target :  "http://3.34.1.129:8000", changeOrigin: true},
    }
  },
  plugins: [
    vue(), 
  ]}
)}
