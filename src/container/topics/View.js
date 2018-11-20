/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/16 10:35
 */
import React, {Component} from 'react';
import { connect } from 'react-redux'

import { fetchRepositories } from './store/actions'
import {Helmet} from "react-helmet";

class View extends Component{

    componentDidMount(){
        this.props.fetchRepositories();
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>react-ssr 我的语雀文章</title>
                </Helmet>
                <h1>文由汝心生，笔墨语雀来</h1>
                <dl>
                    <dt>这里是我在语雀上的文章列表</dt>
                    {
                        this.props.repositories.map(item => {
                            return (
                                <dd key={item.slug}>{item.title}</dd>
                            )
                        })
                    }
                </dl>
            </>
        )
    }
}

const mapStateToProps = state => ({
    repositories: state.topics.repositories
});
const mapDispatchToProps = dispatch => {
    return {
        fetchRepositories: () => dispatch(fetchRepositories())
    }
};

const TopicsView = connect(mapStateToProps, mapDispatchToProps)(View);

TopicsView.loadData = (store) => {
    return store.dispatch(fetchRepositories())
};

export default TopicsView;