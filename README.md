# react-ssr
react服务器端渲染

### 简单服务器端渲染搭建
```$xslt
build
    - webpack.base.js // 公共打包文件
    - webpack.client.js // 客户端打包配置文件
    - webpack.server.js // 服务器打包配置文件
src

    - container // 单页面
        -home //前后端通用组件
    - components // 公共组件
        -header
    - routers // 路由文件夹
        - ClientRouter.js // 客户端路由需要（BrowserRouter）
        - ServerRouter.js // 服务器端路由需要（StaticRouter）
        - Index.js // 导出所有路由的APP
    - client
        - index.js // 客户端入口文件
        - dist // 打包后的文件
    - server
        - index.js // 服务器端入口文件
        - dist // 服务器打包后的文件
```

### 框架使用
- babel7
- npm-run-all
- nodemon

### 项目启动
```$xslt
git clone git@github.com:wuyxp/react-ssr.git
npm install
npm run dev
```