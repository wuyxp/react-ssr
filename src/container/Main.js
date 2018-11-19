/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/18 09:18
 */
import React from 'react';
import { renderRoutes } from 'react-router-config'
import Header from '../components/header/'

export default (props) => {
    return (
        <>
            <Header {...props}/>
            {renderRoutes(props.route.routes)}
        </>
    )
}