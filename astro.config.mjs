import { defineConfig } from "astro/config";
import stylex from "unplugin-stylex/astro";

export default defineConfig({
  outDir: "./dist",
  integrations: [
    stylex({
      stylex: {
        dev: false,
        runtimeInjection: false,
      },
    }),
  ],
});
