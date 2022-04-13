/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import babel from "rollup-plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import { nodeResolve } from "@rollup/plugin-node-resolve"
// import external from "rollup-plugin-peer-deps-external"
// import json from "@rollup/plugin-json"
import path from "path"
// import { terser } from 'rollup-plugin-terser';

const PACKAGE_ROOT_PATH = process.cwd()

const INPUT_FILE = path.join(PACKAGE_ROOT_PATH, "src/index.js")
const PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, "package.json"))

// const EXTERNAL_DEPS = [
//   ...Object.keys(PKG_JSON.peerDependencies || {}),
//   ...Object.keys(PKG_JSON.dependencies || {}),
// ]

const plugins = [
  babel({
    exclude: "node_modules/**",
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: ["@emotion/babel-plugin"],
  }),
  commonjs(),
  nodeResolve(),
  // terser(),
]

const config = {
  input: INPUT_FILE,
  output: [
    { file: PKG_JSON.main, format: "cjs" },
    { file: PKG_JSON.module, format: "esm" },
  ],
  plugins,
  external: ['react', '@emotion/core', '@emotion/styled'],
}

export default [config]
