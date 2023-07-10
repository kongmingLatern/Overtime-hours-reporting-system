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
  test: {
    setupFiles: "./vitest.config.ts",
  },
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
});
