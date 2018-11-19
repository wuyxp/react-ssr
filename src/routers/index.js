/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/14 17:04
 */
import React from 'react';

import MainView from '../container/Main'
import {View as HomeView} from '../container/home'
import {View as HelpView } from '../container/help'
import {View as HeadlinesView} from '../container/headlines'
import {View as TopicsView} from '../container/topics'

import {View as NotFoundView } from '../container/notFound'

const router = [
    {
        path: '/',
        key: '/main',
        component: MainView,
        routes: [
            {
                path: '/',
                key: '/',
                component: HomeView,
                exact: true,
                loadData: HomeView.loadData,
            }, {
                path: '/help',
                key: '/help',
                component: HelpView,
                exact: true,
                loadData(){
                    console.log('----Help----');
                }
            },{
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
            }, {
                key: 'notFound',
                component: NotFoundView
            }
        ]
    }

];

export default router;
