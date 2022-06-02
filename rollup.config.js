import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';

const packageJson = require("./package.json");

const cssExportMap = {};

export default [
    {
        // preserveModules: true,
        input: "lib/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            postcss({
                plugins: [
                  postcssModules({
                    getJSON (id, exportTokens) {
                      cssExportMap[id] = exportTokens;
                    }
                  })
                ],
                getExportNamed: false,
                getExport (id) {
                  return cssExportMap[id];
                },
                extract: 'dist/styles.css',
              }),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            terser(),
        ],
        external: ["react", "react-dom"]
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },
];