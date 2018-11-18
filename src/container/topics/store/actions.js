/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/16 10:17
 */

export const CHANGE_REPOSITORIES = 'change_repositories';

const changeRepositories = repositoriesList => ({
    type: CHANGE_REPOSITORIES,
    repositoriesList
});
export const fetchRepositories = () => {
    return  (dispatch, getState, request) => {
        return request.get("/api/search/repositories?q=ALL&sort=star").then(res => {
            const items = res.data.items;
            dispatch(changeRepositories(items));
        })
    }
}
