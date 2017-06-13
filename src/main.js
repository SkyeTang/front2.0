import alert from './alert'
import editor from './editor'
import {table,tbody,thead,tr,th,td} from './table'
import treeTable from './treeTable'
const components = {
    alert,
    editor,
    table,
    tbody,
    thead,
    tr,
    th,
    td,
    treeTable
}

const install = (Vue) => {
    Object.keys(components).forEach(function(key){
        Vue.component(components[key].name,components[key])
    })
}

if(typeof window !== 'undefined' && window.Vue) install(window.Vue)

export default {
    install
}