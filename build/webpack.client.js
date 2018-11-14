/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/14 14:29
 */
const path = require('path');

module.exports = {
    entry: './client/index.js',
    mode: 'development',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, '../client/dist')
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