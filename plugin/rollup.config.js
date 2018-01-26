import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import globals from 'rollup-plugin-node-globals'
import postcss from 'rollup-plugin-postcss'

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
  input: srcEntry('scripts/popup.js'),
  output: {
    file: distEntry('scripts/popup.js'),
    format: 'umd'
  },
  plugins: [
    postcss({
      plugins: []
    }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        [
          'es2015', {
            modules: false
          }
        ],
        'stage-0',
        'stage-1',
        'react'
      ],
      plugins: [
        'external-helpers',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-class-properties',
        [
          'import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css'
          }
        ]
      ]
    }),
    commonjs({
      namedExports: {
        'node_modules/react/index.js': [
          'Component',
          'Children',
          'cloneElement',
          'createElement',
          'isValidElement'
        ],
        'node_modules/react-dom/index.js': [
          'createPortal',
          'findDOMNode',
        ]
      }
    }),
    globals(),
    resolve({ preferBuiltins: true }),
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
