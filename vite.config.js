import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

export default ({mode}) => { 
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
  server: {
    proxy: {
      '/api': {target :  "http://54.198.136.122:8000", changeOrigin: true},
    }
  },
  resolve : {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
    ],
  }, 
  plugins: [
    vue(), 
  ]}
)}
