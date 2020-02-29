// @ts-check

import alias from "@rollup/plugin-alias"
import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import nodeResolve from "@rollup/plugin-node-resolve"

export default /** @type {import("rollup").RollupOptions} */ ({
  input: "src/index.js",
  output: [{ file: "dist/mjml.js", format: "cjs" }],
  plugins: [
    alias({
      entries: [
        // { find: "lodash", replacement: "lodash-es" }
      ]
    }),
    json(),

    nodeResolve(),
    commonjs()
  ],
  external: require("module").builtinModules
})
