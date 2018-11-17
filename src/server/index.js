/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/14 10:41
 */
import express from 'express';
import React from 'react';
import ReactDomServer from "react-dom/server";
import { matchPath } from 'react-router-dom'

import createServerRouter from '../routers/ServerRouter'
import AppComponent from '../container/App'
import { generatorHTML } from './utils'
import routes from "../routers";
import createStore from '../store'


const app = express();
const store = createStore();


app.use('/', express.static("src/client/dist"));

app.get('/topics', (req, res) => {

    const promises = [];
    routes.some(route => {
        const match = matchPath(req.url, route);
        if (match){
            promises.push(route.loadData(store));
        }
        return match
    });
    Promise.all(promises).then(() => {

        const ServerApp = createServerRouter(req, res);
        const htmlStr = generatorHTML(store, ( <AppComponent initState={store}><ServerApp /></AppComponent>));
        res.send(htmlStr);
    });
});


app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
});