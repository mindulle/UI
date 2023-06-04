import { defineConfig } from 'vite'
import path from 'path';
import tsconfig from './tsconfig.json';
import { cssImport } from './vite-plugin-css'
const paths = tsconfig.compilerOptions.paths;

const packageJSON = require(path.resolve('./package.json'));


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

