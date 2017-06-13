import Vue from 'vue'
import App from './index.vue'
import Router from './route.js'
import SkyeUI from '../src/main.js'

Vue.use(SkyeUI)
new Vue({
    //如果是解构赋值，则命名router命名必须是router。严格按照配置来：http://router.vuejs.org/zh-cn/api/options.html
    router:Router,
    //通过render渲染
    render: h => h(App)
}).$mount('#app')