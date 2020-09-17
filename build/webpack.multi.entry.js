const path = require("path");
// 加载组件列表
const componentList = require("../component.json");
// 加载webpack的公用配置
const webpackBaseConfig = require('./webpack.base.config')
// 加载webpack辅助函数
const {
  utils
} = require('./webpack');

const overallImportConfig = {
  // 打包为多文件
  entry: componentList,
  // 输出
  output: {
    path: path.resolve(process.cwd(), "./lib"),
    publicPath: "/dist/",
    filename: "[name].js",
    chunkFilename: "[id].js",
    libraryExport: "default",
    library: "element-ui",
    libraryTarget: "commonjs2",
  }
};

const {
  margerWebpack
} = utils

module.exports = margerWebpack(webpackBaseConfig, overallImportConfig)