import Vue from 'vue';
import VueRouter from 'vue-router';

// 组件引入
import home from './home.vue';

// 注册组件
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: home,
        }
    ]
});

const App = new Vue({
    router,
}).$mount('#usersApp');