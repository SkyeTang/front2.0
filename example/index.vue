<template>
    <div>
        <div class="header">
            S-UI
        </div>
        <div class="main">
            <div class="sidebar">
                test
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: [],
        data(){
            return {}
        },
        methods: {}
    }
</script>

<style lang="less">
    @import './assets/css/reset.css';
    .header{
        position: fixed;
        top:0;
        height: 60px;
        width: 100%;
        padding: 10px 60px;
        border-bottom: 1px solid gray;
    }
    .main{
        margin-top: 61px;
    }
    .sidebar{
        position: fixed;
        width: 260px;
        top:61px;
        left: 0;
        padding:10px 20px 30px 60px;
    }
    .content{
        margin-left: 260px;
        padding: 20px;
    }
</style>
