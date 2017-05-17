var webpack = require('webpack')
var path = require('path')
var merge = require('webpack-merge')
var baseConf = require('./webpack.base.conf.js')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

Object.keys(baseConf.entry).forEach(function (key) {
    baseConf.entry[key] = ['webpack-hot-middleware/client'].concat(baseConf.entry[key])
})

module.exports = merge(baseConf, {
    devtool: '#cheap-module-eval-source-map',
    plugins: [

        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),


        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
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