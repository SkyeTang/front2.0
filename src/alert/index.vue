<template>
    <div class="dialog" v-show="show">
        <slot>{{message}}</slot>
        <button @click="hide">关闭</button>
    </div>
</template>

<script>
import popMixin from './popup/index'
export  default {
    mixins:[popMixin],
    props:{
        message:{
            type:String,
            default:''
        }
    },
    methods:{
        hide(){
            this.$emit('hide')
        }
    }
}
</script>

<style lang="less">
.dialog{
    width: 300px;
    height: 300px;
    position: absolute;
    top:50%;
    left:50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: green;
}
</style>