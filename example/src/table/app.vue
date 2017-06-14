<template>
    <div>
        <button @click="changeLang">切换语言</button>
        <div>{{$t('name')}}</div>
        <s-table :fixed-head="true" height="100px">
            <s-thead slot="head">
                <s-tr>
                    <s-th width="30%">1</s-th>
                    <s-th width="50%">2</s-th>
                    <s-th width="20%">3</s-th>
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
    </div>

</template>

<script type="text/javascript">
    export default{
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
            },
            changeLang(){
                if(this.$i18n.locale == 'zh'){
                    this.$i18n.locale = 'en'
                }else{
                    this.$i18n.locale = 'zh'
                }
            },
        },
        i18n:{
            messages:{
                'zh':{
                    name: '名称',
                    type: '类型',
                    default: '默认值',
                    description: '描述'
                },
                'en':{
                    name: 'Name123',
                    type: 'Type',
                    default: 'Default',
                    description: 'Description'
                }
            }

        }

    }
</script>

<style lang="less">

</style>