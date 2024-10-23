import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

console.log("VITE_HOST:", process.env.VITE_HOST)
console.log("VITE_PORT:", process.env.VITE_PORT)

export default defineConfig({
  plugins: [vue()],
  base: "/Portfolio-Custom",
  server: {
    host: process.env.VITE_HOST || "localhost",
    // @ts-ignore
    port: process.env.VITE_PORT || 3000,
  },
})
