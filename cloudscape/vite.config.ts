import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: true,
    strictPort: true,
    port: 8002,
  },
  plugins: [
    react(),
    visualizer({
      open: true,
      filename: "bundle-visualization.html",
    }) as PluginOption,
  ],
});
