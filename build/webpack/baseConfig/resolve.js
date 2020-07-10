const path = require('path')

// 按照顺序解析文件，在引入的过程中可以不写文件的扩展名
const extensions = [".js", ".vue", ".ts", ".json"];

//  解析模块的搜索目录
const reloveModule = ["node_modules"];

// 模块的别名
const alias = {
  packages: path.resolve(__dirname, '../../src/packages'),
};


module.exports = {
  extensions,
  alias: alias,
  modules: reloveModule,
}