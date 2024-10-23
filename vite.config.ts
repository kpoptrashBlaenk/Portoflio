import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  plugins: [vue()],
  base: "/Portfolio-Custom",
  server: {
    host: "0.0.0.0",
    // @ts-ignore
    port: process.env.PORT || 3000,
  },
})
