<template>
    <div class="sidebar siteScroll">
        <el-menu class="sidebar-el-menu"
            :collapse="$store.state.collapse" :default-active="onRoutes" router
            background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff">
            <template v-for="item in items">
                <el-submenu v-if="item.subs" :index="item.index" :key="item.index">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </template>
                    <el-menu-item v-for="(subItem, subIndex) in item.subs" :key="subIndex" :index="subItem.index">
                        {{ subItem.title }}
                    </el-menu-item>
                </el-submenu>
                <el-menu-item v-else :index="item.index" :key="item.index">
                    <i :class="item.icon"></i>
                    <span slot="title">{{ item.title }}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: this.$store.state.sidebarData
            }
        },
        computed:{
            onRoutes() {
                return this.$route.path.replace('/','');
            }
        },
    }
</script>

<style>
    .sidebar {
        position: absolute;
        left: 0;
        top: 70px;
        bottom: 0;
        overflow-y: scroll;
    }
    .sidebar > ul {
        height:100%;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 180px;
    }
    .sidebar-el-menu .el-submenu .el-menu-item {
        min-width: auto;
    }
</style>
