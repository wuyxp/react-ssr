/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/15 17:29
 */

import { createStore } from 'redux';

const initState = {
    name: 'www'
};
const reducer = (state=initState, action) => {
    return state;
};

const store = createStore(reducer);
export default store;