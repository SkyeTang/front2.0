<template>
    <div>
        <div class="header">
            <div class="logo">SK-UI</div>
        </div>
        <div class="main">
            <div class="sidebar">
                <ul class="menu">
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                </ul>
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
    @import '../src/style/index.less';
    .header{
        position: fixed;
        display: flex;
        align-items: center;
        top:0;
        height: 60px;
        width: 100%;
        padding: 10px 60px;
        box-shadow: @shadow-up;

    .logo{
            color: @primary-color;
            font-size: 22px;
        }
    }
    .main{
        margin-top: 61px;
    }
    .sidebar{
        position: fixed;
        width: 260px;
        height: calc(~"100% - 61px");
        top:61px;
        left: 0;
        overflow-y: auto;
        box-shadow: @shadow-card;

        .menu{
            padding:20px 0;

            li{
                padding: 10px 30px;
                font-size:16px;

                &:hover{
                     background-color: @background-color-select-hover;
                 }
            }
        }
    }
    .content{
        margin-left: 260px;
        padding: 20px;
    }
</style>
