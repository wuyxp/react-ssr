/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/14 17:04
 */
import React from 'react';
import { Route } from 'react-router-dom'

import {View as HomeView} from '../container/home'
import {View as HelpView } from '../container/help'
import {View as HeadlinesView} from '../container/headlines'
import {View as TopicsView} from '../container/topics'

export default () => {
    return (
        <>
            <Route component={HomeView}  path={"/"} exact />
            <Route component={HelpView}  path={"/help"} exact />
            <Route component={HeadlinesView}  path={"/headlines"} exact />
            <Route component={TopicsView}  path={"/topics"} exact />
        </>
    )
}
