const path = require("path");
/**
 * 参考资料： https://webpack.js.org/configuration/devtool/
 * 代码调试
 */
const devtool = "#eval-source-map";

/**
 * 参考资料： https://webpack.docschina.org/configuration/optimization
 */
const optimization = {
  minimize: true,
  splitChunks: {
    cacheGroups: {
      commons: {
        name: "commons", // 提取出来的文件命名
        // name： ‘common/common’ //  即先生成common文件夹
        chunks: "initial", // initial表示提取入口文件的公共css及
        // chunks: 'all' // 提取所有文件的公共部分
        test: '/\.css$/', // 只提取公共css ，命名可改styles
        minChunks: 2, // 表示提取公共部分最少的文件数
        minSize: 0, // 表示提取公共部分最小的大小
      },
    },
  },
};

/**
 * 参考资料： https://webpack.docschina.org/configuration/performance/
 * 打包之后大文件提示或者警告
 */
const performance = {
  hints: "error",
};

const webpackBaseConfig = require('./webpack')
const {
  utils: {
    createPlugins
  },
  loader,
  resolve,
  externals,
  stats,
  NODE_ENV
} = webpackBaseConfig

module.exports = {
  plugins: createPlugins(),
  stats,
  module: {
    rules: loader
  },
  externals,
  resolve: resolve,
  performance,
  devtool,
  mode: NODE_ENV,
  optimization
}