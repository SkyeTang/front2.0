<template>
    <thead>
        <slot></slot>
    </thead>
</template>

<script>
export default{
    componentName:'thead',
    created(){
        this.isHead = true
    },

}
</script>

<style lang="less">

</style>