<template>
    <div class="login-wrap">
        <div class="login-content">

        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="less">
    .login-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        background: url('../../../../bgImg/usersBg.jpg') no-repeat center;
        background-size: cover;
    }
    .login-content {
        position: absolute;
        left: 50%;
        top: 40%;
        margin-left: -220px; 
        width: 360px;
        padding: 40px;
        border-radius: 5px;
        background: rgba(255,255,255,.8);
    }
</style>
