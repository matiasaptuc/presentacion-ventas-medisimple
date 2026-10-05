import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Cada presentación es una página independiente: / (elegir presentación), /acr y /growthpartner.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // .nosync: el Escritorio está en iCloud y la sincronización traba la escritura del build.
    outDir: "dist.nosync",
    assetsDir: "static",
    rollupOptions: {
      input: {
        index: "index.html",
        acr: "acr.html",
        growthpartner: "growthpartner.html",
      },
    },
  },
});
