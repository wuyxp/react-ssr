/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/15 17:29
 */

import { createStore, combineReducers, applyMiddleware, compose,  } from 'redux';
import reduxThunk from 'redux-thunk';
import { reducer as homeReducer } from '../container/home';
import { reducer as topicsReducer } from '../container/topics'

const reducer = combineReducers({
    home: homeReducer,
    topics: topicsReducer
});

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(reduxThunk),
);

// const store = createStore(reducer, enhancer);
export default (initState = {}) => createStore(reducer, initState, enhancer);