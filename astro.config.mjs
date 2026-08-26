import { defineConfig } from "astro/config";
import stylex from "unplugin-stylex/vite";

export default defineConfig({
  outDir: "./dist",
  vite: {
    plugins: [
      stylex({
        include: [/\.stylex\.[cm]?[jt]sx?$/],
        stylex: {
          dev: false,
          runtimeInjection: false,
          useCSSLayers: true,
          treeshakeCompensation: true,
          unstable_moduleResolution: {
            type: "commonJS",
            rootDir: process.cwd(),
          },
        },
        cssInjectionTarget(fileName) {
          return fileName.endsWith(".css") && !fileName.endsWith("stylex.css");
        },
      }),
    ],
  },
});
