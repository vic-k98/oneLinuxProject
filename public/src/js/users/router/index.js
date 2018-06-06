import Vue from 'vue';
import Router from 'vue-router';
import home from '../component/common/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },{
            path: '/',
            component: resolve => require(['../component/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/index',
                    component: { template: '<p>home page</p>' },
                    meta: { title: '系统首页' }
                },{
                    path: '/table',
                    component: { template: '<p>表格</p>'},
                    meta: { title: '基础表格' }
                }
            ]
        },{
            path: '/login',
            component: resolve => require(['../component/page/Login.vue'], resolve)
        }
    ]
});
