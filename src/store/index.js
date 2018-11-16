/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/15 17:29
 */

import { createStore, combineReducers } from 'redux';
import { reducer as homeReducer } from '../container/home';
import { reducer as topicsReducer } from '../container/topics'

const reducer = combineReducers({
    home: homeReducer,
    topics: topicsReducer
});


const store = createStore(reducer);
export default store;