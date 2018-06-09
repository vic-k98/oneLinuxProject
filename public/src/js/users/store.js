import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);

export default new vuex.Store({
    state: {
        userInfo: null,     // 用户状态信息
        collapse: false,    // 侧边栏折叠标识
        sidebarData: [      // 侧边栏数据
            {
                icon: 'el-icon-setting',
                index: 'index',
                title: '系统首页'
            },
            {
                icon: 'el-icon-tickets',
                index: 'table',
                title: '基础表格'
            },
            {
                icon: 'el-icon-message',
                index: 'tabs',
                title: 'tab选项卡'
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
    },
});