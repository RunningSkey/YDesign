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

//预览
import htmlTemplate from "rollup-plugin-generate-html-template";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
import replace from "rollup-plugin-replace";
import clear from "rollup-plugin-clear";
//预览

const resolve = (p) => path.resolve(__dirname, p);

export default {
  input: resolve("examples/index.tsx"),
  output: {
    file: "dist/main.js",
    format: "cjs",
  },
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
      extensions: [".ts", ".tsx"], //需要手动配置后缀，不然文件ts文件不会被转成es5
    }),
    clear({
      targets: ["dist"],
    }),
    htmlTemplate({
      template: "public/index.html",
      target: "dist/index.html",
    }),
    serve("dist"),
    livereload("examples"),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production"), // 否则会报：process is not defined的错
    }),
    // terser(),
  ],
  external: [
    {
      includeDependencies: true,
    },
  ], // 项目中引用的第三方库
};
