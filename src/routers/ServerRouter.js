/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/14 17:23
 */
import React from 'react';
import {StaticRouter, Route, Switch} from 'react-router-dom';
import { renderRoutes } from 'react-router-config'

import routes from './index'

export default (req, res, context) => {
    return () => (
        <StaticRouter location={req.url} context={context}>
            {renderRoutes(routes)}
        </StaticRouter>
    )
}