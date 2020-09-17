const path = require("path");
const {
  NODE_ENV
} = require('../config')
/**
 * 打包进度条插件
 */
const progressBarWebpackPlugin = require("progress-bar-webpack-plugin");

/**
 * 参考资料： https://vue-loader.vuejs.org/zh/#vue-loader-%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F
 * 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块\
 */
const VueLoaderPlugin = require("vue-loader/lib/plugin");

/**
 * 从js中抽取css文件
 */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (pluginInstance) {
  const basePlugins = [
    new progressBarWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: NODE_ENV === 'development' ? "theme-default/[name].css" : 'theme-default/index.css'
    }),
  ];
  if (!pluginInstance) return basePlugins;
  if (Array.isArray(pluginInstance)) {
    return basePlugins.concat(pluginInstance);
  } else {
    basePlugins.push(pluginInstance);
    return basePlugins;
  }
};