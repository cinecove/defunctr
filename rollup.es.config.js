import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
//import istanbul from 'rollup-plugin-istanbul';

let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

export default {
  input: 'lib/defunctr.js',
  legacy: true,
  plugins: [
    babel(babelrc()),
    //istanbul({
    //  exclude: ['test/**/*', 'node_modules/**/*']
    //})
  ],
  external: external,
  output: {
    file: pkg['jsnext:main'],
    format: 'es',
  },
  sourcemap: false
};
