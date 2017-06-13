import Vue from 'vue'
function restructure(data,show,level,id){
    let pData = [],cData=[],i=0
    data.forEach(item=>{
        i++
        Vue.set(item,'id',id?`${id}-${i}`:i.toString())
        Vue.set(item,'pid',id)
        Vue.set(item,'expand',show)
        Vue.set(item,'show',show)
        Vue.set(item,'level',level)
        pData.push(item)
        if(item.children && item.children.length>0){
            cData =  restructure(item.children,show,level+1,id?`${id}-${i}`:i.toString())
            pData = pData.concat(cData)
        }
    })
    return pData
}


export default {
    props:['gridData'],
    computed:{
        gridList(){
            return restructure(this.gridData,false,0,0)
        }
    },
    methods:{
        toggle(index){
            this.gridList[index].expand = !this.gridList[index].expand
            this.gridList.forEach(item=>{
                if(this.gridList[index].expand && item.pid === this.gridList[index].id){
                    item.show = true
                }
                if(!this.gridList[index].expand && item.id.indexOf(this.gridList[index].id) === 0 && item.id !== this.gridList[index].id){
                    item.show = false
                }
            })
        }
    },
}