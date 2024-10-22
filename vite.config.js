import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // listen on all network interfaces
    // eslint-disable-next-line no-undef
    port: Number(process.env.PORT) || 3000, // use the port specified by Render
  },
})
