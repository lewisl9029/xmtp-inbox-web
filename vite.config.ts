import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";
import unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin("all", {
      prefix: "VITE_",
    }),
    unocss(),
  ],
});
