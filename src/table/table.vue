<template>
    <div>
        <div>
            <table>
                <colgroup>
                    <col>
                    <col v-for="item in columns" :style="{width:item.width}">
                </colgroup>
                <slot v-if="fixedHead" name="head"></slot>
            </table>
        </div>
        <div :style="tableStyle">
            <table>
                <colgroup>
                    <col>
                    <col v-for="item in columns" :style="{width:item.width}">
                </colgroup>
                <slot v-if="!fixedHead" name="head"></slot>
                <slot></slot>
                <slot v-if="!fixedFoot" name="foot"></slot>
            </table>
        </div>
        <div>
            <table>
                <colgroup>
                    <col>
                    <col v-for="item in columns" :style="{width:item.width}">
                </colgroup>
                <slot v-if="fixedFoot" name="foot"></slot>
            </table>
        </div>
    </div>

</template>

<script>
    import Vue from 'vue'
    export default {
        name: 'STable',
        props: {
            fixedHead: {
                type: Boolean,
                default: false
            },
            fixedFoot: {
                type: Boolean,
                default: false
            },
            height: {
                type: String,
                default: '500px'
            },
        },
        data(){
            return {
                selected: [],
                columns: [],
                isCheckAll: false
            }
        },
        computed: {
            tableStyle(){
                return {
                    'overflow': 'auto',
                    'height': this.height
                }
            },
            trChildren(){
                return  this.$children[1].$children
            }
        },
        methods: {
            checkAll(){
                this.isCheckAll = !this.isCheckAll
                this.trChildren.forEach(item => {
                    if (item.$options.name === 'STr') {
                        if (this.isCheckAll) {
                            item.isSelect = true
                            item.select()
                        } else {
                            item.isSelect = false
                            item.unSelect()
                        }
                    }
                })
            },
            getColumns(){
                let c = this.$children[0]
                while (c && c.$options.name !== 'STr') {
                    c = c.$children[0]
                }
                c.$children.forEach(item => {
                    let param = {
                        id: item._uid,
                        width: item.$el.width
                    }
                    this.columns.push(param)
                })
            }
        },
        mounted(){
            Vue.nextTick(
                this.getColumns
            )
        },
        watch:{
            selected:{
                handler(){
                    let c = true
                    this.trChildren.forEach(item => {
                        if (item.$options.name === 'STr') {
                            if(item.isSelect === false){
                                c = false
                            }
                        }
                    })
                    this.isCheckAll = c
                },
                deep:true
            }
        }


    }
</script>

<style lang="less">
    table {
        width: 100%;
        table-layout: fixed;

        th, td {
            text-align: center;
        }
    }
</style>