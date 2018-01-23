import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
// import copy from 'rollup-plugin-copy'
import fs from 'fs-extra'

function srcEntry (name) {
  return `chrome/${name}`
}

function distEntry (name) {
  return `build/Release/${name}`
}

fs.copy('chrome/views/popup.html', distEntry('popup.html'))
.then(()=> fs.copy('chrome/manifest.json', distEntry('manifest.json')))
.catch(console.error)

export default [{
  input: srcEntry('scripts/content.js'),
  output: {
    file: distEntry('scripts/content.js'),
    format: 'umd'
  },
  plugins: [
    resolve({ preferBuiltins: true }),
    commonjs(),
  ]
}, {
  input: srcEntry('scripts/app.js'),
  output: {
    file: distEntry('scripts/app.js'),
    format: 'umd'
  },
  plugins: [
    resolve({ preferBuiltins: true }),
    commonjs(),
  ]
}, {
  input: srcEntry('scripts/background.js'),
  output: {
    file: distEntry('scripts/background.js'),
    format: 'umd'
  },
  plugins: [
    resolve({ preferBuiltins: true }),
    commonjs(),
  ]
}]
