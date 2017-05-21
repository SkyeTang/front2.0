import Vue from 'vue'
import MaskCom from  './mask.vue'
const  Mask = Vue.extend(MaskCom)

const manager = {
    instances:[],
    mask:false,
    show(instance){
        if(!instance || this.instances.indexOf(instance) !== -1) return
        if(!this.mask){
            this.showMask(instance)
        }
        this.instances.push(instance)
        this.changeMaskIndex()
    },
    close(instance){
        const index = this.instances.indexOf(instance)
        if(index === -1) return
        this.instances.splice(index,1)
        if(this.instances.length === 0){
            this.closeMask()
        }
        this.changeMaskIndex()
    },
    showMask(instance){
        this.mask = new Mask({
            el:document.createElement('div')
        })
        this.mask.bgColor = instance.maskBgColor
        this.mask.opacity = instance.maskOpacity
        this.mask.zIndex = instance.maskIndex
        document.body.append(this.mask.$el)
    },
    closeMask(){
        if(!this.mask) return
        this.mask.$el.remove()
        this.mask.$destroy()
        this.mask = false
    },
    changeMaskIndex(){
        if(!this.mask || this.instances.length === 0) return
        const instance = this.instances[this.instances.length-1]
        this.mask.bgColor = instance.maskBgColor
        this.mask.opacity = instance.maskOpacity
        this.mask.zIndex = instance.maskIndex
    }
}

export  default  manager