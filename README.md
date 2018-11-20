### 致谢

通过学习Dell老师在慕课网[React 服务器渲染原理解析与实践](https://coding.imooc.com/class/276.html)的课程，本人也模仿这完成了一个React的简易的ssr框架，[这是github地址](https://github.com/wuyxp/react-ssr)。并且对项目和学习成果做一个简单的总结。



### 目录

下面是比较完整版的目录结构

```

├── README.md    // 项目介绍
├── build        // 打包配置文件夹
│ ├── webpack.base.js    // 基础webpack配置
│ ├── webpack.client.js    // 客户端webpack配置
│ └── webpack.server.js    // 服务器webpack配置
├── package-lock.json    // 项目配置自动生成
├── package.json    // npm配置文件
└── src    // 项目源代码夹
    ├── client    // 客户端文件包入口
    │ ├── dist    // 自动生成文件夹
    │ │ └── index.js    // 自动生成外部引入js文件
    │ └── index.js    // 客户端js入口文件，用于将组建render到dom
    ├── common    // 公共方法文件夹
    │ └── withStyles.js    // 用于生成带有服务器端渲染样式的高阶组件
    ├── components    // 基础组件文件夹
    │ └── header    // 头部组件
    │ │ ├── index.js    // 头部组件的View
    │ │ └── styles.scss    // 头部组件的样式
    ├── container    // 页面级别的组件容器
    │ ├── App.js    // 组件总入口用于包装redux的store数据
    │ ├── Main.js    // 顶级路由需要展示的组件
    │ ├── headlines    // 头条页面
    │ │ ├── View.js    // 视图
    │ │ └── index.js    // 导出文件
    │ ├── help    // 帮助页面
    │ │ ├── View.js    // 视图
    │ │ └── index.js    // 导出文件
    │ ├── home    // 首页
    │ │ ├── View.js    // 视图
    │ │ ├── index.js    // 导出文件
    │ │ ├── store    // 首页数据配置
    │ │ │ ├── actions.js    // 首页数据action
    │ │ │ └── reducer.js    // 首页数据reducer
    │ │ └── styles.scss    // 首页样式
    │ ├── notFound    // 404页面
    │ │ ├── View.js    // 视图
    │ │ └── index.js    // 导出文件
    │ └── topics    // 语雀文章页面
    │ │ ├── View.js    // 语雀文章视图
    │ │ ├── index.js    // 语雀文章导出页面
    │ │ └── store    // 语雀文章数据层
    │ │ │ ├── actions.js    // 语雀文章actions
    │ │ │ └── reducer.js    // 语雀文章reducer
    ├── favicon.ico    // 网站favicon
    ├── request    // axios封装文件夹
    │ ├── baseConfig.js    // axios基础配置
    │ ├── clientConfig.js    // 客户端axios配置
    │ ├── index.js    // 统一导出配置
    │ └── serverConfig.js    // 服务器端axios配置
    ├── routers    // 路由封装文件夹
    │ ├── ClientRouter.js    // 客户端包装后的路由
    │ ├── ServerRouter.js    // 服务器端包装后的路由
    │ └── index.js    // 路由基础数据
    ├── server    // 服务器文件夹
    │ ├── dist    // 服务器打包后的生成代码目录
    │ │ ├── index.ejs    // 
    │ │ └── index.js    // 
    │ ├── index.ejs    // 服务器渲染的ejs模板
    │ ├── index.js    // 服务器入口文件
    │ └── utils.js    // 服务器端所需要的工具js
    └── store    // store公共文件
        ├── index.js    // 创建store
        └── reducers.js    // 总和reducer
```

可以看出目录还是比较全面的，那么下面看一下配置文件中都引入哪些第三方包



### package.json

```

 "dependencies": {
    "axios": "^0.18.0",    // 
    "ejs": "^2.6.1",    // 
    "express": "^4.16.4",    // 
    "express-http-proxy": "^1.5.0",    // 
    "react": "^16.6.3",    // 
    "react-dom": "^16.6.3",    // 
    "react-helmet": "^5.2.0",    // 组件的形式生成页面中title和meta相关标签
    "react-redux": "^5.1.1",    // 
    "react-router-config": "^4.4.0-beta.6",    // 根据req.url来匹配对应的路由，render路由
    "react-router-dom": "^4.3.1",    // 
    "redux": "^4.0.1",    // 
    "redux-thunk": "^2.3.0",    // redux异步处理数据的中间件
    "serve-favicon": "^2.5.0"    // 
  },
  "devDependencies": {
    "@babel/core": "^7.1.6",    // babel7已经移除了stage0相关
    "@babel/plugin-proposal-class-properties": "^7.1.0",
    "@babel/plugin-proposal-json-strings": "^7.0.0",
    "@babel/plugin-syntax-dynamic-import": "^7.0.0",
    "@babel/plugin-syntax-import-meta": "^7.0.0",
    "@babel/plugin-transform-runtime": "^7.1.0",
    "@babel/preset-env": "^7.1.6",
    "@babel/preset-react": "^7.0.0",
    "babel": "^6.23.0",
    "babel-loader": "^8.0.4",
    "babel-plugin-root-import": "^6.1.0",
    "babel-preset-react": "^6.24.1",
    "copy-webpack-plugin": "^4.6.0",    // 复制静态文件
    "css-loader": "^1.0.1",    // 
    "isomorphic-style-loader": "^4.0.0",    // 服务器用于渲染css至页面
    "node-sass": "^4.10.0",    // 
    "nodemon": "^1.18.6",    // 监听node服务自动重启
    "npm-run-all": "^4.1.3",    // 并行启动多个npm命令
    "sass-loader": "^7.1.0",    // 
    "style-loader": "^0.23.1",    // 
    "webpack": "^4.25.1",    // 
    "webpack-cli": "^3.1.2",    // 
    "webpack-merge": "^4.1.4",    // webpack合并方法
    "webpack-node-externals": "^1.7.2"    // 服务器端打包配置文件
  }

```

### 启动命令

```

git clone git@github.com:wuyxp/react-ssr.git

cd react-ssr
npm install
npm run dev

```

### 大纲

从上面的内容可以看出内容还是比较有难度，那么下面就以小步快跑的方式分别从头开始介绍知识点

- 服务器渲染与同构

- 在服务器端同样适用webpack打包

- 服务器渲染react组件

- SSR框架引入react-router

- SSR框架引入redux

- SSR框架引入redux-thunk

- 适用axios进行统一的服务数据请求

- 适用context进行404和重定向处理

- SSR框架引入css样式处理

- SSR框架引入Helmet进行SEO优化

- 将SSR页面输出文件修改为ejs模板

- SSR vs CSR 

- perrender架构说明