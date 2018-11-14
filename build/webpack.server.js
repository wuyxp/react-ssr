/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/14 11:18
 */
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: "node",
    entry: './server/index.js',
    mode: 'development',
    externals: [nodeExternals()],
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, '../server/dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: [ "@babel/preset-react","@babel/preset-env"],
                plugins: [
                    "@babel/plugin-transform-runtime",
                    "@babel/plugin-syntax-dynamic-import",
                    "@babel/plugin-syntax-import-meta",
                    ["@babel/plugin-proposal-class-properties", { "loose": false }],
                    "@babel/plugin-proposal-json-strings"

                ]
            }
        }]
    },


}