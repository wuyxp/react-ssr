/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/18 11:23
 */
import { combineReducers } from 'redux'
import { reducer as homeReducer } from '../container/home';
import { reducer as topicsReducer } from '../container/topics'

export  default combineReducers({
    home: homeReducer,
    topics: topicsReducer
});
