import Vue from 'vue'
import App from './index.vue'
import Router from './route.js'
import SkyeUI from '../src/main.js'

Vue.use(SkyeUI)
new Vue({
    el:'#app',
    Router,
    render: h => h(App)
})