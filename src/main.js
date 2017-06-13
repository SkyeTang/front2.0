import alert from './alert'
import editor from './editor'
import * as table from './table'
import treeTable from './treeTable'
console.log(table)
const components = {
    alert,
    editor,
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