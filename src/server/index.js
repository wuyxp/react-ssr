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
    Promise.all(promises).then(data => {

        const ServerApp = createServerRouter(req, res);

        const container = `
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="root">${ReactDomServer.renderToString( <AppComponent initState={store}>
            <ServerApp />
        </AppComponent>)}</div>
</body>
<script>
window.__data__ = ${JSON.stringify(store.getState())}
</script>
<script src="/index.js"></script>
</html>
`;
        /*
        const html = generatorHTML(() => (
            <AppComponent>
                <ServerApp />
            </AppComponent>
            )
        );
        */
        res.send(container);
    });
});


app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
});