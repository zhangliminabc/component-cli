const path = require("path");
const {
  utils
} = require("./webpack");
// 加载webpack的公用配置
const webpackBaseConfig = require("./webpack.base.config");

const overallImportConfig = {
  mode: "production",
  entry: {
    app: path.resolve(process.cwd(), "./src/index.ts"),
  },
  output: {
    path: path.resolve(process.cwd(), "./lib"),
    publicPath: "/dist/",
    filename: "index.js",
    libraryExport: "default",
    library: "element-ui",
    libraryTarget: "commonjs2",
  },
};

const {
  margerWebpack
} = utils;

const webpackCommonConfig = margerWebpack(
  webpackBaseConfig,
  overallImportConfig
);

module.exports = {
  ...webpackCommonConfig,
};