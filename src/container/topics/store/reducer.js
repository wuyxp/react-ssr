/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/16 10:20
 */
import {CHANGE_REPOSITORIES} from './actions';
const initState = {
    repositories: [],
};
const reducer = (state=initState, action) => {
    switch (action.type) {
        case CHANGE_REPOSITORIES:
            return {repositories: [...action.repositoriesList]}
    }
    return state;
};
export default reducer;