import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {TanStackRouterVite} from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [TanStackRouterVite(), react(), tailwindcss()],
    esbuild: {
        loader: 'tsx',  // Add this
        include: ['src/**/*.tsx', 'src/**/*.ts']  // Add this
    }
})
