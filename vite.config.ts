import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5174, // you can change the port if needed
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendors": ["react", "react-dom"],
        },
      },
    },
    chunkSizeWarningLimit: 1500,
  },
});
