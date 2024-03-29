import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
const hash = Math.floor(Math.random() * 90000) + 10000;
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    publicDir: "assets",
    root: "./",
    build: {
      outDir: "dist",

      rollupOptions: {
        output: {
          entryFileNames: `[name]` + hash + `.js`,
          chunkFileNames: `[name]` + hash + `.js`,
          assetFileNames: `[name]` + hash + `.[ext]`,
        },
      },
    },
    //base: process.env.VITE_APP_BASE_URL,

    server: {
      proxy: {
        "/api": { target: "https://api.appling.me", changeOrigin: true },
        "/service": {
          target: "http://www.kamis.co.kr",
          changeOrigin: true,
        },
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
