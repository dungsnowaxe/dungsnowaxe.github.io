import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {
    ignorePatterns: [
      ".impeccable/**",
      "dist/**",
      "node_modules/**",
      "profile.md",
      "profile-vi.md",
      "DESIGN.md",
      "PRODUCT.md",
    ],
  },
  lint: {
    ignorePatterns: [".impeccable/**", "dist/**", "node_modules/**"],
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
});
