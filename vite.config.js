import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({mode}) => { 
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
  server: {
    proxy: {
      '/': process.env.VITE_API_URL,
    }
  },
  plugins: [
    vue(), 
  ]}
)}
