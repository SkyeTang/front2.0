<template>
    <tbody>
        <slot></slot>
    </tbody>
</template>

<script>
export default {
    componentName:'tbody',
    created(){
        this.isBody = true
    },
}
</script>

<style lang="less">

</style>