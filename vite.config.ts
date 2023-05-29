import { defineConfig } from 'vite'

import { cssImport } from './vite-plugin-css'

export default defineConfig({
  plugins: [cssImport()]
  
})