<template>
    <div class="warper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box siteScroll" :class="{'content-collapse': $store.state.collapse}">
            <v-tags></v-tags>
            <div class="content">
                
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
        overflow-y: scroll;
        -webkit-transition: left .3s ease-in-out;
        transition: left .3s ease-in-out;
        background: #f0f0f0;

        &.content-collapse {
            left: 65px;
        }
    }

    .content {
        padding: 40px;
    }
</style>
