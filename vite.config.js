import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  
  return defineConfig({
    publicDir: "assets",
    root: "./",
    build: {
      outDir: "dist",
    },
    base: process.env.VITE_APP_BASE_URL,

    server: {
      proxy: {
        "/api": { target: "http://3.34.124.71:8000", changeOrigin: true },
      },
      //host: true,
      port: 5173,

      host: "0.0.0.0",
    },
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    plugins: [vue()],
  });
};
