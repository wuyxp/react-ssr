/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/15 17:29
 */

import { createStore, applyMiddleware, compose,  } from 'redux';
import reduxThunk from 'redux-thunk';

import createRequest from '../request'
import reducers from './reducers'

export default (initState = {}, isServer = false) => {
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            }) : compose;

    const request = createRequest(isServer);
    const enhancer = composeEnhancers(
        applyMiddleware(reduxThunk.withExtraArgument(request)),
    );

    return createStore(reducers, initState, enhancer);
}
