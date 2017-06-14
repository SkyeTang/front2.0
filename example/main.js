import Vue from 'vue'
import App from './index.vue'
import SkyeUI from '../src/main.js'
import router from './route.js'
import i18n from './i18n.js'

Vue.use(SkyeUI)


new Vue({
    //如果是解构赋值，则命名router命名必须是router。严格按照配置来：http://router.vuejs.org/zh-cn/api/options.html
    router,
    i18n,
    //通过render渲染
    render: h => h(App)
}).$mount('#app')