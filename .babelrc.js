const plugins =
  process.env.NODE_ENV === 'development'
    ? []
    : [
        // '@babel/plugin-external-helpers', // 把 helpers 收集到一个共享模块或共享文件
        [
          '@babel/plugin-transform-runtime', //依赖@babel/runtime 生产依赖
          {
            corejs: 3, //配置安装 @babel/runtime-corejs3 生产依赖
            useESModules: true, //不转换esm的代码，让其支持tree-shaking。交给rollup去转换esm。
          },
        ],
      ];
console.log(process.env.NODE_ENV, 'process.env.NODE_ENV');
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      // {
      //   modules: false, //不转换esm的代码，让其支持tree-shaking，交给rollup去转换esm。
      //   targets: {
      //     //根据此配置进行按需引入polyfill,如果没有会根据package.json中的browserslist或者.browserslistrc
      //     ie: 10,
      //     //如果代码运行的浏览器支持 ES Modules,应当指定如下配置.不过,此时 browsers 选项将被忽略
      //     // "esmodules": true
      //   },
      //   "useBuiltIns": "usage",//usage false entry 默认：false
      //   //usage: 此选项配置@babel/preset-env 根据【targets+你写的代码】按需引入polyfill
      //   //false: 不引入polyfill，需要手动安装并引入 npm i @babel/polyfill 和import @babel/polyfill
      //   //entry：根据【targets】按需引入polyfill

      //   //配置了useBuiltIns corejs也必须安装配置 npm i core-js3 生产依赖
      //   "corejs": 3,//默认2，3包含了es规范的最新特性，例如：flat,...
      // },
    ],
  ],
  plugins: plugins,
};
