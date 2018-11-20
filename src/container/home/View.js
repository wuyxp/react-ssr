/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/16 10:40
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Helmet} from "react-helmet";

import withStyles from '../../common/withStyles'
import styles from './styles.scss'

class Home extends Component{
    render() {
        return (
            <>
                <Helmet>
                    <title>react-ssr 做最专业的SSR框架</title>
                    <meta name="Description" content="主要是学习慕课网dell老师的react服务器渲染原理" />
                </Helmet>
                <div>来自服务端的内容提示：</div>
                <h1 className={styles.title}>渣比群主!</h1>
                <button onClick={() => {alert("点击事件已经加上")}}>点击啊</button>
                <div>来自redux渲染的内容：</div>
                <h1>{this.props.name}</h1>
            </>
        )
    }
}

const HomeStyle = withStyles(styles)(Home);
const mapStateToProps = state => ({
    name: state.home.name
});
const HomeView = connect(mapStateToProps, null)(HomeStyle);
HomeView.loadData = () => {
    
};
export default HomeView