/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/16 15:12
 */
import React from 'react';
import ReactDomServer from 'react-dom';

export const generatorHTML = createAppComponent => {
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
    <div id="root">${ReactDomServer.renderToString(
        <>
            {createAppComponent()}</>
    )}
</body>
<script src="/index.js"></script>
</html>
`;

    return container;
};