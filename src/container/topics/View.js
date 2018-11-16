/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/16 10:35
 */
import React, {Component} from 'react';
import { connect } from 'react-redux'
import Header from '../../components/Header'

import { fetchRepositories } from './store/actions'

class View extends Component{

    componentDidMount(){
        this.props.fetchRepositories();
    }

    render() {
        return (
            <>
                <Header/>
                <h1>文由汝心生，笔墨语雀来</h1>
                <dl>
                    <dt>这里展示github最近最火的项目列表</dt>
                    {
                        this.props.repositories.map(item => {
                            return (
                                <dd key={item.git_url}>{item.full_name}</dd>
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

export default connect(mapStateToProps, mapDispatchToProps)(View);