<template>
    <div class="header">
        <!-- 折叠按钮 -->
        <div class="collapseBtn js-share">
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
        },
        methods: {
            share() {
                const fjs = document.getElementsByTagName('script')[0];
                if (document.getElementById('pinterest-jssdk')) return;
                const js = document.createElement('script');
                js.id = 'pinterest-jssdk';
                js.src = '//assets.pinterest.com/js/pinit.js';
                fjs.parentNode.insertBefore(js, fjs);
                js.onload = () => {
                    console.log(document.getElementsByClassName('js-share'));
                    document.getElementsByClassName('js-share')[0].onclick = function() {
                        PinUtils.pinAny();
                    }
                    // $(document).on('click', '.js-share', () => {
                    //     onClick();
                    //     if (isLogin) {
                    //         const curIsLogin = await userIsLogin();
                    //         if (!curIsLogin) {
                    //             window.location.href = Share.loginUrl;
                    //             return;
                    //         }
                    //     }
                    //     PinUtils.pinAny() // eslint-disable-line
                    // });
                };
            }
        },
        created() {
            this.share();
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
