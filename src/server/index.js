/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/14 10:41
 */
import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';

const app = express();

import createServerRouter from '../routers/ServerRouter'


app.use('/', express.static("src/client/dist"));

app.get('*', (req, res) => {

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
    <div id="root">${ReactDomServer.renderToString(<ServerApp />)}</div>
</body>
<script src="/index.js"></script>
</html>
`;
    res.send(container)
});


app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
});