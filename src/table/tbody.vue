<template>
    <tbody>
        <slot></slot>
    </tbody>
</template>

<script>
export default {
    name:'STbody',
    created(){
        this.isBody = true
    },
}
</script>

<style lang="less">

</style>