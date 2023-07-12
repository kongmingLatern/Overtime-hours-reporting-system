import { defineConfig } from "vitest/config";
import path from "path";
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    exclude: ["node_modules", "dist", "./src/store/__tests__/fixtures/*.ts"],
  },
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
});
