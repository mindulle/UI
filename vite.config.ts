import { defineConfig } from 'vite'

import tsconfig from './tsconfig.json';
import { cssImport } from './vite-plugin-css'
const paths = tsconfig.compilerOptions.paths;

import packageJSON from './package.json';

export default defineConfig({
  plugins: [cssImport()],
  build: {
    lib: {
      entry: packageJSON.source,
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.es.js' : 'index.js'),
    },
  }
})

