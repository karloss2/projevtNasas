import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Build straight into /docs so Pages can serve from main branch
export default defineConfig({
    base: '/projevtNasas/',   // MUST match the repo name exactly
    plugins: [react()],
    build: {
        outDir: 'docs'          // <-- key change: output to /docs
    }
})
