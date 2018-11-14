/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/14 17:04
 */
import React from 'react';
import { Route } from 'react-router-dom'

import Home from '../container/home/Index'
import Help from '../container/help/Index'
import Headlines from '../container/headlines/Index'
import Topics from '../container/topics/Index'

export default () => {
    return (
        <>
            <Route component={Home}  path={"/"} exact />
            <Route component={Help}  path={"/help"} exact />
            <Route component={Headlines}  path={"/headlines"} exact />
            <Route component={Topics}  path={"/topics"} exact />
        </>
    )
}
