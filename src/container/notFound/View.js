/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/19 09:47
 */

import React,{Component} from 'react'

class NotFound extends Component{
    render() {
        const { staticContext } = this.props;
        staticContext && (staticContext.status = 404);
        return (
            <div>
                <h1>404 找不到页面啦</h1>
            </div>
        );
    }
}

export default NotFound
