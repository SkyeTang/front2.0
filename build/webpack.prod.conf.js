var webpack = require('webpack')
var path = require('path')
var merge = require('webpack-merge')
var baseConf = require('./webpack.base.conf.js')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(baseConf, {
    devtool: '#source-map',
    plugins: [
        //压缩js
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname,'../example/index.html'),
            inject: true
        }),

        //复制静态资源
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: ''
            }
        ]),

        //友好的错误提示
        new FriendlyErrorsPlugin()

    ]
})