import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcssPresetEnv from 'postcss-preset-env';
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle';
import postcss from 'rollup-plugin-postcss';

const packageJson = require("./package.json");

export default [
    {
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
            excludeDependenciesFromBundle({ dependencies: true }),
            peerDepsExternal(),
            resolve(),
            commonjs(),
            postcss({
              plugins: [postcssPresetEnv({
                stage: 1,
                features: { }
              })]
            }),
            typescript({ tsconfig: "./tsconfig.json" }),
            terser(),
        ],
        external: ["react", "react-dom"]
    }
];