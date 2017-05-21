<template>
    <transition name="mask">
        <div class="mask" @click="doOnClick" :style="styles"></div>
    </transition>
</template>

<script>
export default {
    name:'mask',
    props:{
        bgColor:{
            type:String,
            default:'#000'
        },
        opacity:{
            type:Number,
            default:0.4
        },
        zIndex:{
            type:Number,
            default:9999,
        },
        onClick:{
            type:Function
        }
    },
    computed:{
        styles(){
            return {
                'background-color':this.bgColor,
                'opacity':this.opacity,
                'z-index':this.zIndex
            }

        }
    },
    methods:{
        doOnClick(){
            if(this.onClick) this.onClick()
        }
    }
}
</script>

<style lang="less">
.mask{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #000;
    opacity: .4;
    z-index: 1000;
}
</style>