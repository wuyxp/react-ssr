/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/16 09:51
 */
import React from 'react';
import {Provider} from 'react-redux'

import store from '../store/'

export default (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}