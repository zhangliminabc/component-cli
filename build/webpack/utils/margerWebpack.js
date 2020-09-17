/**
 * 合并webpack的配置
 */
module.exports = function () {
  const paramslist = arguments
  if (paramslist.length <= 0) return {}
  const list = Array.from(arguments)
  const result = {}
  list.forEach((params) => {
    Object.keys(params).forEach(key => {
      const paramsValue = params[key]
      result[key] = paramsValue
    })
  })
  return result
}