var webpack = require('webpack')
var express = require('express')
var path = require('path')
var opn = require('opn')
var webpackConf = require('./webpack.dev.conf.js')
var history = require('connect-history-api-fallback')

var app  = express()
var compile = webpack(webpackConf)

var port = process.env.PORT || 3001

var devMiddleware = require('webpack-dev-Middleware')(compile,{
    noInfo: true,
    status: { color: true }
})
var hotMiddleware = require('webpack-hot-Middleware')(compile)

app.use(devMiddleware)
app.use(hotMiddleware)

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

var uri = 'http://localhost:' + port
devMiddleware.waitUntilValid(()=>{
    console.log('> Listening at ' + uri + '\n')
    opn(uri)
})
app.listen(port)
