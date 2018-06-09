<template>
    <div class="warper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse': $store.state.collapse}">
            <v-tags></v-tags>
            <div class="content siteScroll">
                <div class="contentpanding">
                    <transition name="move" mode="out-in">
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import vTags from './Tags.vue';

    export default {
        components: {
            vHead,
            vSidebar,
            vTags
        },
    }
</script>

<style lang="less">
    .content-box {
        position: absolute;
        left: 180px;
        right: 0;
        top: 70px;
        bottom: 0;
        -webkit-transition: left .3s ease-in-out;
        transition: left .3s ease-in-out;
        background: #f0f0f0;

        &.content-collapse {
            left: 65px;
        }
    }
    .content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow-y: scroll;
    }
    .contentpanding {
        padding: 50px 40px;
    }

    .move-enter-active,
    .move-leave-active {
        transition: opacity .5s;
    }
    .move-enter,
    .move-leave {
        opacity: 0;
    }
</style>
