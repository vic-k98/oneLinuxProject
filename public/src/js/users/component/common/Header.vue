<template>
    <div class="header">
        <!-- 折叠按钮 -->
        <div class="collapseBtn">
            <i class="el-icon-menu"></i>
        </div>
        <div class="logo">后台管理系统</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style lang="less">
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        color: #fff;
        background-color: #242f42;
    }

    .collapseBtn {
        float: left;
        padding: 0 21px;
        cursor: pointer;
        line-height: 70px;
    }

    .headerLogo {

    }
</style>
