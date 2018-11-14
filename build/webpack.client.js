/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/14 14:29
 */
const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base');

const serverConfig = {
    entry: './client/index.js',
    mode: 'development',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, '../client/dist')
    },
}
module.exports = merge(baseConfig, serverConfig);