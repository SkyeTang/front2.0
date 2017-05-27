<template>
    <div>
        <div>
            <table>
                <slot v-if="fixedHead" name="head"></slot>
            </table>
        </div>
        <div :style="tableStyle">
            <table>
                <slot v-if="!fixedHead" name="head"></slot>
                <slot></slot>
                <slot v-if="!fixedFoot" name="foot"></slot>
            </table>
        </div>
        <div>
            <table>
                <slot v-if="fixedFoot" name="foot"></slot>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    componentName:'table',
    props:{
        fixedHead:{
            type:Boolean,
            default:false
        },
        fixedFoot:{
            type:Boolean,
            default:false
        },
        height:{
            type:String,
            default:'500px'
        }
    },
    computed:{
        tableStyle(){
            return {
                'overflow':'auto',
                'height':this.height
            }
        }
    }

}
</script>

<style lang="less">

</style>