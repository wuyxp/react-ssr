# react-ssr
react服务器端渲染

### 简单服务器端渲染搭建
```$xslt
build
    - webpack.client.js // 客户端打包配置文件
    - webpack.server.js // 服务器打包配置文件
container
    -home //前后端通用组件
client
    - index.js // 客户端入口文件
    - dist // 打包后的文件
server
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