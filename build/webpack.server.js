/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/14 11:18
 */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base');

const serverConfig = {
    target: "node",
    entry: './src/server/index.js',
    mode: 'development',
    externals: [nodeExternals()],
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, '../src/server/dist')
    },
}
module.exports = merge(baseConfig, serverConfig);