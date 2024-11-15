import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  plugins: [vue()],
  base: "/",
  server: {
    host: process.env.VITE_HOST || "localhost",
    // @ts-ignore
    port: process.env.VITE_PORT || 3000,
  },
})
