# react-boilerplate

## 目录结构
```js
|-- react-boilerplate
    |-- entry                            // index.html 模版文件
    |   |-- index.ejs
    |-- src                              // 项目代码目录
        |-- router.js                    // 路由
        |-- components                   // 组件
        |   |-- Button.js
        |   |-- ErrorBoundary.js
        |   |-- index.js
        |-- config                       // 环境配置
        |   |-- config.dev.js
        |   |-- config.prod.js
        |   |-- index.js
        |-- ducks                        // redux
        |   |-- index.js
        |-- images                       // 图片
        |-- pages                        // 页面
        |   |-- CustomerList.js
        |   |-- Login.js
        |   |-- UserList.js
        |   |-- index.js
        |-- store                        // store配置
        |   |-- index.js
        |   |-- store.dev.js
        |   |-- store.prod.js
        |-- styles                       // 样式
        |   |-- button.less
        |   |-- index.less
        |-- utils                        // 工具方法

```

## 目录说明
- dist: 打包后的文件目录
- src: 项目代码目录
- entry: index.html模版文件
- webpack: webpack的plugin和module目录,以避免重复定义

## 运行
- npm install
- npm run local.dev