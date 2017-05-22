import Manager from './manager'
import {getIndex} from './util'

export default {
    props:{
        show:{
            type:Boolean,
            require:true
        },
        maskBgColor:{
            type:String,
            default:'#000'
        },
        maskOpacity:{
            type:Number,
            default:0.4
        },
    },
    data(){
        return {
            maskIndex:getIndex(),
            zIndex: getIndex()
        }
    },
    updated(){
        this.setIndex()
    },
    mounted(){
        if(this.open){
            Manager.show(this)
        }
    },
    methods:{
        setIndex(){
            const dom = this.$el
            if (dom) dom.style.zIndex = this.zIndex
        },
        resetIndex(){
            this.maskIndex = getIndex()
            this.zIndex = getIndex()
        }
    },
    watch:{
      show(val,oldval){
          if(val === oldval) return
          if(val){
              this.resetIndex()
              Manager.show(this)
          }else{
              Manager.close(this)
          }
      }
    }
}