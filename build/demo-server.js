var webpack = require('webpack')
var express = require('express')
var webpackConf = require('./webpack.demo.conf.js')
var devMiddleWare = require('webpack-dev-middleware')
var hotMiddleWare = require('webpack-hot-middleware')

var compile = webpack(webpackConf)
var app  = express()
var port = process.env.PORT || 3002

app.use(devMiddleWare(compile,{
    noInfo: true,
    status: { color: true }
}))

app.use(hotMiddleWare(compile))

console.log('> starting dev server ...')
app.listen(port)
console.log('> dev server listen on port http://localhost:'+port)