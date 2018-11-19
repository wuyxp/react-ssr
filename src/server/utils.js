/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/16 15:12
 */
import React from 'react';
import ReactDomServer from 'react-dom/server';

export const generatorHTML = (store, Component, context, cssList) => {
    const componentStr = ReactDomServer.renderToString(Component);
    const cssStr = cssList.join('\n');
    const container = `
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <style>${cssStr}</style>
                <title>模拟语雀</title>
            </head>
            <body>
                <div id="root">${componentStr}</div>
            </body>
            <script>
                window.__data__ = ${JSON.stringify(store.getState())}
            </script>
            <script src="/index.js"></script>
        </html>
    `;

    return container;
};