<template>
    <div>
        <t :show="show"></t>
        <button @click="toTest">测试按钮</button>
    </div>
</template>

<script type="text/javascript">
    import t from './test.vue'
    export default{
        components:{t},
        data(){
            return {
                show:false,
            }
        },
        methods:{
            toTest(){
                this.show=true
            }
        }
    }
</script>

<style lang="less">

</style>