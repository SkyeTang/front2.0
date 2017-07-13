<template>
    <div>
        <div class="header">
            SKUI
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
        display: flex;
        align-items: center;
        top:0;
        height: 60px;
        width: 100%;
        padding: 10px 60px;
        box-shadow: 0 0 1px rgba(0,0,0,.25);
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
