<template>
    <div class="header">
        <!-- 折叠按钮 -->
        <div class="collapse-btn" @click="$store.state.collapse = !$store.state.collapse;">
            <i class="el-icon-menu"></i>
        </div>
        <div class="logo">后台管理系统</div>
        <div class="header-right">
            <div class="right-con">
                <!-- 全屏显示 -->
                <div class="fullscreen-btn" >
                    <el-tooltip effect="light" :content="fullscreen ? `取消全屏` : `全屏`" placement="bottom">
                        <i class="el-icon-rank" @click="handleFullScreen"></i>
                    </el-tooltip>
                </div>
                <!-- 消息中心 -->
                <!-- <div class="bell-btn">
                    <el-tooltip effect="light" :content="message ? `有${message}条未读消息` :`消息中心` " placement="bottom">
                        <i class="el-icon-bell"></i>
                        <router-link to="/tabs">
                        </router-link>
                    </el-tooltip>
                    <span class="bell-badge" v-if="message"></span>
                </div> -->
                <!-- 用户头像 -->
                <a class="user-avator" href="javascript:;">
                    <img :src="userheading">
                </a>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="click" size="small" @command="headCommand">
                    <span class="el-dropdown-title">
                        {{ username }} <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fullscreen: false,  // 是否处于全屏标示
                message: 2,         // 未读消息数
            }
        },
        computed: {
            username() {
                return this.$store.state.userInfo ? this.$store.state.userInfo.name || 'ADMIN' : '';
            },
            userheading() {
                return this.$store.state.userInfo ? this.$store.state.userInfo.headImg || '/image/icon/head-man.png' : '';
            }
        },
        methods: {
            headCommand(command) { // 用户下拉设置
                if (command === 'logout') { // 推出登陆
                    sessionStorage.removeItem('ms_userinfo');
                    this.$store.commit('setUserInfo', null);
                    this.$router.push('/login');
                }
            },
            handleFullScreen() { // 全屏事件
                let element = document.documentElement;
                if (this.fullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        // IE11
                        element.msRequestFullscreen();
                    }
                }
                this.fullscreen = !this.fullscreen;
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
    .collapse-btn {
        float: left;
        padding: 0 21px;
        cursor: pointer;
        line-height: 70px;
    }
    .logo {
        float: left;
        line-height: 70px;
    }
    .header-right{
        float: right;
        padding-right: 50px;
    }
    .right-con {
        display: flex;
        height: 70px;
        align-items: center;
    }
    .fullscreen-btn {
        width: 30px;
        height: 30px;
        cursor: pointer;
        font-size: 24px;
        transform: rotate(45deg);
        text-align: center;
    }
    .bell-btn {
        position: relative;
        width: 30px;
        height: 30px;
        cursor: pointer;
        text-align: center;
        margin-left: 15px;
    }
    .bell-badge {
        position: absolute;
        right: 0;
        top: -2px;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #f56c6c;
        color: #fff;
    }
    .user-avator {
        display: block;
        width:40px;
        height:40px;
        border-radius: 50%;
        margin-left: 20px;
        overflow: hidden;
        cursor: default;
    }
    .user-avator img{
        background: #fff;
        width: 100%;
        height: 100%;
    }
    .user-name{
        margin-left: 10px;
    }
    .el-dropdown-title {
        color: #fff;
        cursor: pointer;
    }
    .el-dropdown-menu__item {
        text-align: center;
    }
</style>
