import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ["./__tests__/setup.ts"],
    environment: "happy-dom",
  },
});
