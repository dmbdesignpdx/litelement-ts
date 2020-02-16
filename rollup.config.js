import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import livereload from 'rollup-plugin-livereload'


const dev = process.env.ROLLUP_WATCH

export default {
  input: 'src/index.ts',
  output: {
    sourcemap: dev,
    format: 'es',
    file: 'public/dist/main.js',
  },
  plugins: [
    resolve(),
    typescript(),
    dev && livereload(),
  ]
}
