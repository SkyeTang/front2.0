<template>
    <tree-table :data="data"></tree-table>
</template>

<script>
    export default {
        data(){
            return {
                data: [
                    {
                        name: 'heello',
                        age: '243',
                        sex: 'boy',
                        children: [
                            {
                                name: '2234',
                                age: '243',
                                sex: 'boy'
                            },
                            {
                                name: '5544545',
                                age: '243',
                                sex: 'boy'
                            }
                        ]
                    },
                    {
                        name: 'teerer',
                        age: '243',
                        sex: 'boy'
                    },
                    {
                        name: 'sssss',
                        age: '243',
                        sex: 'boy'
                    }
                ]
            }
        }
    }
</script>

<style lang="less">

</style>