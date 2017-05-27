<template>
    <tr>
        <th v-if="isHeadChild">
            <input type="checkbox" :checked="checkAll">全选
        </th>
        <td v-if="isBodyChild">
            <input type="checkbox" :vaule="value">
        </td>
        <slot></slot>
    </tr>
</template>

<script>
export default{
    props:{
        value:''
    },
    data(){
        return {
            checkAll:false
        }
    },
    computed:{
        isHeadChild(){
            return this.$parent.isHead === true
        },
        isBodyChild(){
            return this.$parent.isBody === true
        }
    }
}
</script>

<style lang="less">

</style>