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

const router = [
    {
        path: '/',
        key: '/',
        component: HomeView,
        exact: true,
        loadData: HomeView.loadData
    },{
        path: '/help',
        key: '/help',
        component: HelpView,
        exact: true,
        loadData(){
            console.log('----Help----');
        }
    }, {
        path: '/headlines',
        key: '/headlines',
        component: HeadlinesView,
        exact: true,
    }, {
        path: '/topics',
        key: '/topics',
        component: TopicsView,
        exact: true,
        loadData:TopicsView.loadData
    }
];

export default router;
/*

export default () => {
    return (
        <>
            <Route component={HomeView}  path={"/"} exact  loadData ={() => {console.log('abc')}}/>
            <Route component={HelpView}  path={"/help"} exact />
            <Route component={HeadlinesView}  path={"/headlines"} exact />
            <Route component={TopicsView}  path={"/topics"} exact />
        </>
    )
}

*/