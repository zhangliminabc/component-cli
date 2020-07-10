const path = require('path')
const fs = require('fs')
/**
 * 生成全局的样式，避免后期可能会新增全局样式，这里使用函数生成
 * @param {*} globelStylePath 
 */
module.exports = function (globelStylePath) {
  const list = fs.readdirSync(path.resolve(process.cwd(), globelStylePath))
  if (list.length <= 0) return []
  const result = []
  list.forEach(stylePathName => {
    const url = path.resolve(process.cwd(), `${globelStylePath}/${stylePathName}`)
    if (stylePathName.includes('variables')) {
      result.unshift(url)
    } else {
      result.push(url)
    }
  })
  return result

}