import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { dts } from "rollup-plugin-dts";
import tailwindcss from "tailwindcss";

const tailwindConfig = require("./tailwind.config.js");
const packageJson = require("./package.json");

export default [
	{
		input: "src/index.ts",
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
			nodeResolve(),
			commonjs(),
			typescript({ tsconfig: "./tsconfig.json" }),
			postcss({
				config: {
					path: "./postcss.config.js",
				},
				extensions: [".css"],
				minimize: true,
				inject: {
					insertAt: "top",
				},
				plugins: [tailwindcss(tailwindConfig)],
			}),
		],
	},
	{
		input: "dist/esm/types/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts()],
		external: [/\.(css|less|scss)$/],
	},
];
