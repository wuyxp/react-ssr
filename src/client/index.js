/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/14 14:27
 */
import React from 'react';
import ReactDom from 'react-dom';

import App from '../container/App'
import ClientRouter from '../routers/ClientRouter'

import createStore from '../store'

// 注水操作
const __data__ = window.__data__ || '{}';
// TODO 这是使用ejs里面的字符串渲染，直接parse有错误。
try {
    JSON.parse(__data__)
}catch (e) {

    console.log('输出到这里，说明解析失败了，伟大的计划还是没有成功');
}
// console.log(__data__);

ReactDom.render(
    (<App initState={createStore(JSON.parse(__data__))}>
        <ClientRouter />
    </App>), document.querySelector("#root"));