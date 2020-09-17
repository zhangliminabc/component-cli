var path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
var config = require("../config");
const webpackUtils = require("../utils/index");

// loader配置
module.exports = [
  {
    test: /\.(jsx?|babel|es6)$/,
    include: process.cwd(),
    exclude: config.jsexclude,
    loader: "babel-loader",
  },
  {
    test: /\.vue$/,
    loader: "vue-loader",
    options: {
      compilerOptions: {
        preserveWhitespace: false,
      },
    },
  },
  {
    test: /\.css$/,
    loaders: ["style-loader", "css-loader"],
  },
  {
    test: /\.css$/,
    loaders: [
      {
        loader: "vue-style-loader",
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
        },
      },
    ],
  },
  {
    test: /\.(sa|sc|c)ss$/,
    loaders: [
      {
        loader: miniCssExtractPlugin.loader,
        options: {
          hmr: process.env.NODE_ENV === "development",
        },
      },
      "css-loader",
      "sass-loader",
      {
        loader: "sass-resources-loader",
        options: {
          sourceMap: true,
          resources: webpackUtils.createdGlobleStyle("src/assets/scss"),
        },
      },
    ],
  },
  // 处理 ts 文件，以及 vue 文件中的 <script lang="ts">
  {
    test: /\.tsx?$/,
    loader: "ts-loader",
    options: {
      appendTsSuffixTo: [/\.vue$/],
    },
    exclude: config.jsexclude,
  },
];
