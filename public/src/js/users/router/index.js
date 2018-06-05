import Vue from 'vue';
import Router from 'vue-router';
import home from '../component/common/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },{
            path: '/',
            component: resolve => require(['../component/common/Home.vue'], resolve),
            children: [
                {
                    path: '/index',
                    component: { template: '<p>home page</p>' }
                }
            ]
        },
    ]
});
