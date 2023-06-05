import path from 'path';

import { defineConfig } from 'vite'

import tsconfig from './tsconfig.json'
import { cssImport } from './vite-plugin-css'
const paths = tsconfig.compilerOptions.paths
const alias: Record<string, string> = {}
Object.keys(paths).forEach((key) => {
  alias[key] = path.resolve(__dirname, paths[key as keyof typeof paths][0])
})

const packageJSON = require(path.resolve('./package.json'))

export default defineConfig({
  plugins: [
    cssImport(),
  ],
  resolve: {
    alias,
  },
  build: {
    lib: {
      entry: packageJSON.source,
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.es.js' : 'index.js'),
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJSON.dependencies || {}),
        ...Object.keys(packageJSON.peerDependencies || {}),
        'react/jsx-runtime',
      ],
    },
    sourcemap: true,
    minify: false,
  }
})

