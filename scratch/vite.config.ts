import { defineConfig, type PluginOption, type Alias } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { fileURLToPath } from "url";

function createAlias(folderName: string, parentFolder?: string): Alias {
  const folders = [];
  if (parentFolder) folders.push(parentFolder);
  folders.push(folderName);
  return {
    find: `@${folderName}`,
    replacement: fileURLToPath(
      new URL(`./src/${folders.join("/")}`, import.meta.url)
    ),
  };
}

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: true,
    strictPort: true,
    port: 8000,
  },
  plugins: [
    react(),
    visualizer({
      open: true,
      filename: "bundle-visualization.html",
    }) as PluginOption,
  ],
  resolve: {
    alias: [
      createAlias('assets'),
      createAlias('components'),
      createAlias('styles')
    ]
  }
});
