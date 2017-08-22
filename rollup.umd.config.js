import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
//import istanbul from 'rollup-plugin-istanbul';

let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

export default {
  input: 'lib/index.js',
  legacy: true,
  plugins: [
    babel(babelrc()),
    //istanbul({
    //  exclude: ['test/**/*', 'node_modules/**/*']
    //})
  ],
  external: external,
  output: {
    file: pkg['browser'],
    format: 'umd',
    name: 'defunctr',
  },
  sourcemap: false
};
