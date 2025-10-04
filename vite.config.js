import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base must match the repo name exactly (case-sensitive)
export default defineConfig({
    base: '/VELORA-/',
    plugins: [react()],
})
