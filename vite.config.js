import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
// const foo = require("node:node_modules/@thirdweb-dev/wallets/dist/thirdweb-dev-wallets.browser.esm.js");
// import
import { ThirdwebProvider } from "@thirdweb-dev/react";
export default defineConfig({
  build: {
    rollupOptions: {
      external: [/node_modules/],
    },
  },
  plugins: [react()],
  define: {
    global: "globalThis",
    "process.env": {},
  },
});
