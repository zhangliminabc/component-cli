/**
 * 格式化webpack打包控制台输出
 * https://webpack.docschina.org/configuration/stats/#statsmodules
 */
module.exports = {
  assets: true,
  builtAt: true,
  children: false,
  chunks: false,
  modules: false,
  entrypoints: true,
  moduleAssets: false,
  chunkGroups: false,
  colors: true,
  env: true,
  logging: 'warn'
}