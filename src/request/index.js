/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/18 10:36
 */

import axios from 'axios'

const request = () => {

    return axios.create({
        baseURL: '/'
    });
};

export default request();