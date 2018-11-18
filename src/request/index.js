/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/18 10:36
 */

import axios from 'axios'

import clientConfig from './clientConfig';
import serverConfig from './serverConfig';
import baseConfig from './baseConfig'

const createRequest = (isServer) => {

    const config = isServer ? serverConfig : clientConfig;
    const instance = axios.create({...baseConfig, ...config});
    instance.interceptors.request.use(function (config) {
        // console.log('config', config);
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
    return instance;
};

export default createRequest;