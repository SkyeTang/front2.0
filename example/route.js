import Vue from 'vue'
import Router from 'vue-router'
import Table from './src/table/app.vue'
import TreeTable from './src/treeTable/app.vue'
Vue.use(Router)

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/index',
            component: resolve => require(['./src/table/app.vue'], resolve)
        },
        {path: '/table', component: Table},
        {path: '/treeTable', component: TreeTable},
        {path: '*', redirect: '/index'}
    ]
})

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0)
    next()
})


export default router