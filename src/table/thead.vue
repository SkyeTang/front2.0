<template>
    <thead>
        <slot></slot>
    </thead>
</template>

<script>
export default{
    name:'SThead',
    created(){
        this.isHead = true
    },

}
</script>

<style lang="less">

</style>