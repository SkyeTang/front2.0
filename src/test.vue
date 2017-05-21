<template>
    <div class="dialog" v-if="show">hello
        <button @click="closed">关闭</button>
    </div>
</template>

<script>
import popMixin from './popup/index'
export  default {
    mixins:[popMixin],
    methods:{
        closed(){
            this.show = false
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