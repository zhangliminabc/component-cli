// 排除node_module模块， https://www.npmjs.com/package/webpack-node-externals
const nodeExternals = require("webpack-node-externals");
const Components = require("../../../component.json");

var externals = {};
Object.keys(Components).forEach(function (key) {
  externals[`tal-component/src/packages/${key}`] = `tal-component/lib/${key}`;
});
// externals = [
//   Object.assign({
//       vue: "vue",
//     },
//     externals
//   ),
//   nodeExternals(),
// ];
// 排除不需要打包的模块，详情参考：https://webpack.docschina.org/configuration/externals/
// module.exports = externals

module.exports = [
  nodeExternals(),
  Object.assign({}, externals),
]