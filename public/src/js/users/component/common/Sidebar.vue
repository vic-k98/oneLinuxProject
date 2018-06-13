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
                items: [      // 侧边栏数据
                    {
                        icon: 'el-icon-setting',
                        index: 'index',
                        title: '系统首页',
                    },
                    {
                        icon: 'el-icon-tickets',
                        index: 'table',
                        title: '基础表格',
                    },
                    {
                        icon: 'el-icon-tickets',
                        index: 'manage',
                        title: '用户管理',
                        auth: 10,
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'setting',
                        title: '系统设置',
                        auth: 5,
                    },
                    // {
                    //     icon: 'el-icon-date',
                    //     index: '3',
                    //     title: '表单相关',
                    //     subs: [
                    //         {
                    //             index: 'form',
                    //             title: '基本表单'
                    //         },
                    //         {
                    //             index: 'editor',
                    //             title: '富文本编辑器'
                    //         },
                    //         {
                    //             index: 'markdown',
                    //             title: 'markdown编辑器'
                    //         },
                    //         {
                    //             index: 'upload',
                    //             title: '文件上传'
                    //         }
                    //     ]
                    // },
                    // {
                    //     icon: 'el-icon-star-on',
                    //     index: 'charts',
                    //     title: 'schart图表'
                    // },
                    // {
                    //     icon: 'el-icon-rank',
                    //     index: 'drag',
                    //     title: '拖拽列表'
                    // },
                    // {
                    //     icon: 'el-icon-warning',
                    //     index: 'permission',
                    //     title: '权限测试'
                    // },
                    // {
                    //     icon: 'el-icon-error',
                    //     index: '404',
                    //     title: '404页面'
                    // }
                ]
            }
        },
        computed:{
            onRoutes() {
                return this.$route.path.replace('/','');
            },
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
