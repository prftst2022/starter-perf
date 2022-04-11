/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import autoprefixer from 'autoprefixer';
import path from 'path';
import url from 'postcss-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const PACKAGE_ROOT_PATH = process.cwd();

const INPUT_FILE = path.join(PACKAGE_ROOT_PATH, 'src/index.js');
const PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, 'package.json'));

const EXTERNAL_DEPS = [
  ...Object.keys(PKG_JSON.peerDependencies || {}),
  ...Object.keys(PKG_JSON.dependencies || {}),
];

const plugins = [
  peerDepsExternal(),
  json(),
  nodeResolve({ preferBuiltins: true }),
  babel({
    exclude: 'node_modules/**',
    babelHelpers: 'bundled',
    presets: ['@babel/preset-env', '@babel/preset-react'],
  }),
  commonjs(),
  postcss({
    plugins: [
      autoprefixer(),
      url({
        url: 'inline',
        maxSize: 10,
        fallback: 'copy',
      }),
    ],
    sourceMap: true,
  }),
];

const config = {
  input: INPUT_FILE,
  output: [
    { file: PKG_JSON.main, format: 'cjs' },
    { file: PKG_JSON.module, format: 'esm' },
  ],
  plugins,
  external: EXTERNAL_DEPS,
};

export default [config];
