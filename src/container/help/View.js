/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/16 10:42
 */
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'

class View extends Component{

    render() {
        return (
            true ? <Redirect to={'/'}/> : (
                <div>
                    <h1>请使用我们的帮助文档</h1>
                </div>)
        );

    }
}
export default View;
