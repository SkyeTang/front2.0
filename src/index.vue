<template>
<s-table :fixed-head="true" height="100px">
    <s-thead slot="head">
        <s-tr>
            <s-th>1</s-th>
            <s-th>2</s-th>
            <s-th>3</s-th>
        </s-tr>
    </s-thead>
    <s-tbody>
        <s-tr v-for="(item,index) in tableData" :value="item" :key="index">
            <s-td>{{item.name}}</s-td>
            <s-td>{{item.age}}</s-td>
            <s-td>{{item.sex}}</s-td>
        </s-tr>
    </s-tbody>
</s-table>
</template>

<script type="text/javascript">
    import STable from './table/table.vue'
    import SThead from './table/thead.vue'
    import STbody from './table/tbody.vue'
    import STd from './table/td.vue'
    import STh from './table/th.vue'
    import STr from './table/tr.vue'
    export default{
        components:{
            STable,SThead,STbody,STd,STh,STr
        },
        data(){
            return {
                show:false,
                tableData:[
                    {
                        name:'jason1',
                        age:'25',
                        sex:'man'
                    },
                    {
                        name:'jason2',
                        age:'25',
                        sex:'man'
                    },
                    {
                        name:'jason3',
                        age:'25',
                        sex:'man'
                    }
                ]
            }
        },
        methods:{
            toTest(){
                this.show=true
            },
            hide(){
                this.show =false
            }
        }
    }
</script>

<style lang="less">

</style>