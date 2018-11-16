/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/14 17:23
 */

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './index'

export default () => {
    return (
        <BrowserRouter>
            <>
            {
                App.map(item => {
                    return(
                        <Route {...item} />
                    )
                })
            }
            </>
        </BrowserRouter>
    )
}