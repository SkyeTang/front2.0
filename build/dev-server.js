var webpack = require('webpack')
var express = require('express')
var webpackConf = require('./webpack.dev.conf.js')
var devMiddleWare = require('webpack-dev-middleware')
var hotMiddleWare = require('webpack-hot-middleware')
var history = require('connect-history-api-fallback')

var compile = webpack(webpackConf)
var app  = express()
var port = process.env.PORT || 3001

app.use(devMiddleWare(compile,{
    noInfo: true,
    status: { color: true }
}))

app.use(hotMiddleWare(compile))

app.use(express.static(__dirname + "/"))
app.use(history({
    index:'index.html',
    rewrites: [
        {
            from: /\/soccer/,
            to: '/index.html'
        }
    ]
}))

console.log('> starting dev server ...')
app.listen(port)
console.log('> dev server listen on port http://localhost:'+port)