import { defineConfig } from "vitest/config";
import path from "path";
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    exclude: [
      "node_modules",
      "dist",
      "./src/__tests__/fixtures/*.ts",
      "./src/__tests__/helpers/*.ts",
    ],
  },
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
});
