const path = require('path')
const fs = require('fs')
const componentMap = {}
/**
 * 递归获取获取index.js，用于自动生成component.json文件
 * @param {*} orginPath 
 * @param {*} catalog 
 */
function recursivePackage(orginPath, catalog) {
  if (!orginPath) return
  const packagePath = catalog ? `./${orginPath}/${catalog}` : `./${orginPath}`
  const list = fs.readdirSync(path.resolve(process.cwd(), packagePath))
  if (list.length <= 0) return
  if (list.includes('index.ts')) {
    return `${packagePath}/index.ts`
  }
  list.forEach(key => {
    componentMap[key] = recursivePackage(orginPath, key)
  })
  return componentMap
}

recursivePackage('src/packages')
// 写入组件配置文件
fs.writeFileSync(path.resolve(process.cwd(), 'component.json'), JSON.stringify(componentMap))