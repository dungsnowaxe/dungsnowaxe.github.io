import { defineConfig } from "astro/config";
import stylex from "unplugin-stylex/astro";

export default defineConfig({
  integrations: [
    stylex({
      stylex: {
        runtimeInjection: false,
        useCSSLayers: true,
        treeshakeCompensation: true,
        unstable_moduleResolution: {
          type: "commonJS",
          rootDir: process.cwd(),
        },
      },
    }),
  ],
});
