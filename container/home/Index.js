/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/14 10:51
 */

import React from 'react';

const Home = () => {
    return (
        <>
            <div>来自服务端的内容提示：</div>
            <h1>渣比群主!</h1>
            <button onClick={() => {alert("点击事件已经加上")}}>点击啊</button>
        </>
    )
}

export default Home;