/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/16 15:12
 */
import React from 'react';
import ReactDomServer from 'react-dom/server';

export const generatorHTML = (Component, cssList) => {
    const componentStr = ReactDomServer.renderToString(Component);
    const cssStr = cssList.join('\n');
    return {
        componentStr,
        cssStr
    };
};