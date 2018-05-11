import Vue from 'vue';
import VueRouter from 'vue-router';
// 组件引入
import home from './home.vue';
import test from './component/test.vue';


// 注册组件
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: home,
            children: [
                {
                    path: 'test',
                    component: test
                }
            ]
        }
    ]
});

const App = new Vue({
    router,
}).$mount('#usersApp');