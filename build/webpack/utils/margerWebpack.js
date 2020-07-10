/**
 * 合并webpack的配置
 */
module.exports = function () {
  const paramslist = arguments
  if (paramslist.length <= 0) return {}
  const list = Array.from(arguments)
  return list.reduce((pre, value) => {
    return Object.assign(pre, value)
  }, {})
}