/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/14 17:23
 */
import React from 'react';
import { StaticRouter } from 'react-router-dom';

import App from './Index'

export default (req, res) => {
    return () => {
        return (
            <StaticRouter location={req.url} context={{}}>
                <App/>
            </StaticRouter>
        )
    }
}