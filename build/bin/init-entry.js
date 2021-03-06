/**
 * 自动生成src下的index.js文件
 */
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const render = require("json-templater/string");
const uppercamelcase = require("uppercamelcase");
const endOfLine = require("os").EOL;
// 引入组件语句模板
const IMPORT_TEMPLATE = `import {{packageName}} from \'./packages/{{name}}/index.ts\';`;
// 安转组件模板语句
const INSTALL_TEMPLATE = `{{name}}`;
// 输出路径
const OUTPUT_PATH = path.join(__dirname, "../../src/index.ts");
// 自动生成src/index.js
const MAIN_TEMPLATE = `/* Automatically generated by './build/bin/init-entry.js' */

{{include}}

const components = [
  {{install}}
];

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  {{list}}
};
`;
// 判断component.json是否存在
const isExists = () => {
  try {
    return fs.statSync(path.resolve(process.cwd(), "./component.json"));
  } catch (error) {
    return false;
  }
};
const isExtised = isExists();
// 不存在执行脚本生成
if (!isExtised) {
  execSync("node build/bin/created-component.js");
}

const componentMap = require("../../component.json");
const componetList = Object.keys(componentMap);

const includeList = [];
const listTemplate = [];
const installList = [];
// 编译生成模板
componetList.forEach((componentName) => {
  const packageName = uppercamelcase(componentName);
  includeList.push(
    render(IMPORT_TEMPLATE, {
      packageName,
      name: componentName,
    })
  );
  installList.push(
    render(INSTALL_TEMPLATE, {
      name: packageName,
    })
  );
  listTemplate.push(packageName);
});

const template = render(MAIN_TEMPLATE, {
  include: includeList.join(endOfLine),
  install: installList.join("," + endOfLine),
  list: listTemplate.join("," + endOfLine),
});

fs.writeFileSync(OUTPUT_PATH, template);
