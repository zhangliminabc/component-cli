const path = require('path')
const nodeExternals = require("webpack-node-externals");
const baseConfig = require('./webpack.base.config')
const webpackUtile = require('./webpack.utils')

const overallImportConfig = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: 'tal-component-ui.common.js',
    chunkFilename: '[id].js',
    libraryExport: 'default',
    library: 'tal-component',
    libraryTarget: 'commonjs2'
  },
  externals: [
    Object.assign({
      vue: "vue",
    }),
    nodeExternals(),
  ]
}

const {
  webpackBaseConfig,
  webpackCommonPlugin
} = baseConfig

const {
  margerWebpack
} = webpackUtile

module.exports = margerWebpack(webpackBaseConfig, webpackCommonPlugin, overallImportConfig)