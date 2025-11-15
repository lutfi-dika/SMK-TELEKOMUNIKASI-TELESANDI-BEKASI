import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Base path untuk deployment ke sub-direktori
  // Properti ini yang akan diakses oleh import.meta.env.BASE_URL
  base: "/SMK-TELEKOMUNIKASI-TELESANDI-BEKASI/",
});
