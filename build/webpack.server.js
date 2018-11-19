/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/14 11:18
 */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin')
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
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'isomorphic-style-loader',
                {
                    loader: "css-loader",
                    options: {
                        modules: true,
                        localIdentName: "[path][name]-[local]-[hash:base64:5]",
                        sourceMap: true,
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
                    }
                }
            ]
        }]
    },
    /*
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/server/index.ejs', to: './' }
        ])
    ]
    */
}
module.exports = merge(baseConfig, serverConfig);