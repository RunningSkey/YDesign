import typescript from "rollup-plugin-typescript2";
//typescript：让rollup input 支持ts文件
import rollupResolve from "rollup-plugin-node-resolve";
//rollupResolve：如果没有该插件 import 引入的 第三包，会被转为require形式，不会将包打进入bundle
import commonjs from "rollup-plugin-commonjs";
//commonjs：需要将 CommonJS 模块转换为 ES2015 供 Rollup 处理
import path from "path";
import babel from "rollup-plugin-babel";
//babel: 转换为es5语法，需要安装@babel/core，@babel/preset-env
// import { terser } from 'rollup-plugin-terser';
//terser 压缩代码

import pkg from './package.json'
const resolve = (p) => path.resolve(__dirname, p);

export default {
  input: resolve("packages/index.ts"),
  output: [
    {
      file: resolve("lib/index.js"),
      format: "cjs",
      name: pkg.name
    },
    {
      file: resolve("lib/index.esm.js"),
      format: "es",
      name: pkg.name
    },
    {
      file: resolve("lib/index.umd.js"),
      format: "umd",
      name: pkg.name //umd 模块 必须给name
    },
  ],
  plugins: [
    commonjs(),
    rollupResolve({
      // 将自定义选项传递给解析插件
      customResolveOptions: {
        moduleDirectory: "node_modules",
      },
    }),
    typescript(),
    babel({
      exclude: "node_modules/**",
      extensions: [".ts", ".tsx"],//需要手动配置后缀，不然文件ts文件不会被转成es5
    }),
    // terser()
  ],
  // 指出应将哪些模块视为外部模块 就不会被打包
  external: ['react','react-dom','lodash']
};
