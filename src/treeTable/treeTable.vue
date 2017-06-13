<script>
    import mix from './factory'
    export default {
        name:'TreeTable',
        mixins: [mix],
    }
</script>

<template>
    <table class="table-gridList">
        <thead>
        <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in gridList" v-show="item.level === 0 || item.show">
            <td :style="{paddingLeft:(item.level+1)*20+'px'}">
                <i @click="toggle($index)" class="icon-arrow__right" v-if="item.children && item.children.length >0"></i>
                {{item.name}}
            </td>
            <td>{{item.age}}</td>
            <td>{{item.sex}}</td>
        </tr>
        </tbody>
    </table>
</template>

<style lang="less">
    .table-gridList td,.table-gridList th{
        padding: 10px 20px;
        border: 1px solid black;
        border-collapse: collapse;
    }
</style>