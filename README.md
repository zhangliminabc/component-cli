# 目的： 搭建内容中台的组件库

## 方式

vue-cli3: webpack 配置难以自定义

### webpack

---

- [friendly-errors-webpack-plugin](https://github.com/geowarin/friendly-errors-webpack-plugin) 对 webpack 打包输入的信息过滤或者配置 webpack 的 stats 属性， 详情请参考[stats](https://webpack.docschina.org/configuration/stats/#statsmodules) 格式化 webpack 控制台输出

- [externals](https://webpack.docschina.org/configuration/externals/)将文件中引入的某些类库排除在打包的文件中，在运行时从外部获取

- [resolve](https://webpack.docschina.org/configuration/resolve/)选项能设置模块如何被解析

-[loader]正则匹配对应的文件用不同的处理器处理代码

### css

#### [sass-resources-loader](https://github.com/shakacode/sass-resources-loader) 全局可用的样式不需要@import

#### optimize-css-assets-webpack-plugin

#### [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/) 抽取 js 中的 css 文件

### js/ts

#### https://github.com/qinyuanf/front-end-Weekly/issues/6

### 文档

#### [vue-press](https://vuepress.vuejs.org/zh/guide/)

### 测试

#### [vue-test-utils](https://vue-test-utils.vuejs.org/zh/)

### 按需加载

#### [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)

# tsc --init

# ts

https://www.tslang.cn/docs/handbook/compiler-options.html

https://github.com/TypeStrong/fork-ts-checker-webpack-plugin

### 按需加载

目的： 避免我们在使用组件库的过程中把所有的用到和没用到的内容都打包到业务代码中去，导致最后的 bundle 文件过大影响用户体验

方式：
babel-plugin-component
（https://www.npmjs.com/package/babel-plugin-component）
babel-pluigin-import

https://zhuanlan.zhihu.com/p/80731830

#### 目录结构

├── README.md &nbsp;&nbsp;&nbsp;用于文档说明
├── build
│   ├── config.js &nbsp;&nbsp;&nbsp; webpack 的一些公用配置
│   ├── loder.config.js &nbsp;&nbsp;&nbsp; webpack 的 loader 配置
│   ├── webpack.common.config.js &nbsp;&nbsp;&nbsp; 用于打包输出 commonjs 规范的文件
│   └── webpack.component.js &nbsp;&nbsp;&nbsp; 用于将每个组件打包为单个文件输入，用于按需加载功能更
├── component.json &nbsp;&nbsp;&nbsp; 组件配置文件，根据此文件将生产多个组件文件，用于按需加载
├── example &nbsp;&nbsp;&nbsp; 组件 demo 文件
├── lib &nbsp;&nbsp;&nbsp; 组件打包之后的文件，发布版本是包含此文件夹
│   ├── droupdown.js
│   └── treeComp.js
├── package.json &nbsp;&nbsp;&nbsp;
├── packages &nbsp;&nbsp;&nbsp; 放置组件源文件的地方
│   ├── droupdown
│      └── src &nbsp;&nbsp;&nbsp; 组件源码
│      └── index.vue &nbsp;&nbsp;&nbsp; 组件暴露出的一个 install 方法
├── src &nbsp;&nbsp;&nbsp; 组件源码
css 存放 css
reset.scss 重置标签样式
variable.scss 样式变量
├── test &nbsp;&nbsp;&nbsp; 单元测试
├── types &nbsp;&nbsp;&nbsp; 类型校验
└── yarn.lock

### 脚本

clear:lib: 移除 lib 目录
babel:demo: 将指定文件转成 es5， 用于 babel 学习
build:component: 多入口打包组件
create:component.json: 自动生成 component.json 列表，将每个组件单独打包为，用于按需加载
build:file: 自动生成 src/index.ts
build:commonjs: 打包所有组件，用于批量导入

### 参考资料

在字符串和变量之间替换的库（也可以用字符串模板）
https://www.npmjs.com/package/json-templater

整体构建流程
https://juejin.im/post/5ef173c051882565bf507c2d

webpack 配置参考
https://www.webpackjs.com/configuration

webpack 插件参考
progressBarWebpackPlugin: 打包进度条
https://www.npmjs.com/package/progress-bar-webpack-plugin

https://juejin.im/post/5b9768b2e51d450e9942eb98#heading-29

https://juejin.im/post/5b7d2f45e51d4538826f4c28

https://juejin.im/post/5ef173c051882565bf507c2d#heading-45

https://www.webpackjs.com/configuration/performance/

src/index
样式不能嵌套太深
code-review
生成组件的脚本配置可变
打包为脚手架的形式

函数

[组件库设计参考资料](https://juejin.im/post/5d566e82f265da03f77e653c)
[web 脑图](https://zhuanlan.zhihu.com/p/109470373)
[postcss](http://api.postcss.org/postcss)
[stylelint](https://juejin.im/post/5c022f4a6fb9a049ca371684)
[stylelint 配置方式](https://juejin.im/post/5b4ffd1ef265da0f990d52e8)
[element-ui 脚本解释](https://blog.csdn.net/s1879046/article/details/85173824)
[cp-cli](https://github.com/screendriver/cp-cli/blob/master/src/cp-cli.ts)
[babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)
[stylelint 官网](https://stylelint.io/user-guide/configure)
[vue-markdown-loader](https://github.com/QingWei-Li/vue-markdown-loader)
[jest](https://jestjs.io/docs/zh-Hans/getting-started.html)

### 输出 compoent-ui

```
|-- lib
  -- base.css
  - index.js
  - index.css // 全局引入
  - componentA  // 按需引入
      |-- index.js
      |-- index.css
  - componentB
      |-- index.js
      |-- index.css

引入

.babelrc
  - plugins
   [

     'component',
     {
       libraryName: 'compoent-ui',
       styleLibrary:  {
         "base": true
       },
       libDir: 'lib',
       camel2Dash: true,
       style: 'index.css'
     }
   ]
```

### 目录

```
|-- lib
|-- build
  |-- bin
    create.entry.js
    create.component.js
    create.component.list.js
    create:new:component.js
  |-- webpack.entry.js -> src/index.ts -> lib/index.js
  |-- webpack.component.js -> component.json
  |-- webpack.devsever.js
  |-- webpack.config.js -> webpack共有配置
  |-- webpack.example.js -> 生成组件文档
  |-- gulp.index.js -> lib/组件.css -> lib/index.css
|-- packages
  |-- componentA
    |-- src
      |-- module
      |-- compoentA.vue
      |-- utils
      |-- images
    |-- index.ts -> 通过create.component.js生成防止组件命名不规范问题
| -- customComponents // 业务组件
    |-- managerTable //管理后台的通用列表
      |-- src
      |-- module
      |-- compoentA.vue
      |-- utils
      |-- images
    |-- index.ts
|-- src
  index.ts -> create.entry.js通过脚本引入所有的组件抛出一个组件对象
  assets
    |-- iconfont -> icon-font的字体文件
    |-- scss
      -- icon.scss
      -- base.scss
      -- variable.scss
      -- mixin.scss
  -- gulpfile.js -> 编译scss下的基本样式文件生成lib/base.css
|-- package.json
  |-- clear -> rm rf libs
  |-- create:entry -> create.entry.js
  |-- create:compoent -> create.component.js
  |-- create:component:json -> create.component.list
  |-- create:base:style -> gulpfile.js
  |-- build:component -> webpack.component.js
  |-- build:index ->  webpack.entry.js
  |-- build:index.css -> gulp.index.js
  |-- dev:sever -> webpack.devsever.js
  |-- create:new:compoent -> create:new:component.js
  |-- test: jest
  |-- build -> clear && test && create:base:style && build:index && build:component && build:index.css
|-- tslint.config.js
|-- eslint.config.js
|-- componet.json -> 组件列表配置通过create.component.list遍历packages下的目录名字生成
|-- .gitignore
|-- Reade.md 相关学习资料参考
|-- jest.config.js 测试配置
|-- babel.config.js -> 配置ts代码转成js
|-- stylelint.js -> 样式规范统一
|-- doc
  |-- tal-component-ui
  |-- app.vue
  |-- compoent
    |-- componentA.md -> vue-markdown-loader
    |-- componentA.vue
  |-- nav
    |-- nav.vue
    |-- config.ts
  |-- header.vue
  |-- footer.vue
  |-- router.ts
  |-- index.ts
|-- test // 组件测试
  |-- componentA.spec.ts
```

### 技术选型

```
 组件: vue + ts
 构建: webpack + gulp
 样式: scss(高级用法)
 测试: jest
 tsloder + scss-loader + sass-resouce-loader + vue-loder + vue-mark-loader...
 node
```

### 输出

@tal/compoent-ui

### 参照 element-ui

#### 区别:

1. 技术选型上
2. 项目管理上(定制化组件 + 组件资源统一管理)
3. 去除语言包配置
4. 使用上(babel)
5. 文档生成上

#### 新增

1. 业务组件
2. 使用文档
3. 集成单元测试
