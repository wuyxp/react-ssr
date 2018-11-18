/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/14 10:41
 */
import express from 'express';
import favicon from 'serve-favicon';
import proxy from 'express-http-proxy';
import React from 'react';
import { matchRoutes } from 'react-router-config'

import { baseURL } from '../request/serverConfig'
import createServerRouter from '../routers/ServerRouter'
import AppComponent from '../container/App'
import { generatorHTML } from './utils'
import routes from "../routers";
import createStore from '../store'


const app = express();
const store = createStore({}, true);

app.use('/', express.static("src/client/dist"));
app.use(favicon('src/favicon.ico'));
app.use('/api', proxy(baseURL, {
    https: true,
}));

app.get('*', (req, res) => {

    console.log(req.url);
    /*
     * 这里将通过matchRoutes匹配的路由，过滤一下没有loadData方法的数据.全部执行一下loadData方法，将返回的promise填充回去
     */
    const promises = matchRoutes(routes, req.url).filter(route => typeof route.route.loadData === 'function').map(route => route.route.loadData(store));
    Promise.all(promises).then(() => {
        const ServerApp = createServerRouter(req, res);
        const htmlStr = generatorHTML(store, ( <AppComponent initState={store}><ServerApp /></AppComponent>));
        res.send(htmlStr);
    });
});


app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
});