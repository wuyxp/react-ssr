/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/14 15:15
 */

module.exports = {
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