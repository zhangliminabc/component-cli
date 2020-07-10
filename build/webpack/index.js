const loader = require('./baseConfig/loder')
const resolve = require('./baseConfig/resolve')
const externals = require('./baseConfig/externals')
const stats = require('./baseConfig/state')
const config = require('./config')
const utils = require('./utils')

module.exports = {
  loader,
  resolve,
  externals,
  stats,
  ...config,
  utils
}