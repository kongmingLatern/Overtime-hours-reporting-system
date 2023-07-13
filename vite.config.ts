import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import vueJSX from "@vitejs/plugin-vue-jsx";
import UnoCSS from "unocss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    vueJSX(),
    UnoCSS({
      configFile: "./uno.config.ts",
    }),
  ],
  server: {
    port: 5173,
    origin: "http://127.0.0.1:5173",
    proxy: {
      "/api": {
        target: "http://172.18.19.42:8020/api",
        changeOrigin: true,
        rewrite: (path) => path.replace("/^/api", ""),
      },
    },
  },
  test: {
    setupFiles: "./vitest.config.ts",
  },
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
});
