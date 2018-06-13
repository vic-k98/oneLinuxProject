import Vue from 'vue';
import Router from 'vue-router';

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
                    component: resolve => require(['../component/page/Index.vue'], resolve),
                    meta: { title: '系统首页' }
                },{
                    path: '/table',
                    component: { template: '<p>表格</p>'},
                    meta: { title: '基础表格' }
                },{
                    path: '/manage',
                    component: { template: '<p>表格</p>'},
                    meta: { title: '用户管理' , auth: 10 }
                },{
                    path: '/setting',
                    component: { template: '<p>表格</p>'},
                    meta: { title: '系统设置' , auth: 5 }
                }
            ]
        },{
            path: '/login',
            component: resolve => require(['../component/page/Login.vue'], resolve)
        }
    ]
});
