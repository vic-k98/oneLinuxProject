import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store.js';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题

// 注册 element-ui 组件
Vue.use(ElementUI, { size: 'smail' });

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    if (!store.state.userInfo) store.commit('setUserInfo', JSON.parse(sessionStorage.getItem('ms_userinfo')));
    const role = store.state.userInfo;
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (role && to.path === '/login') {
        next('/index');
    } else if (to.meta.auth) { // 判断是否需要验证权限
        role.auth >= to.meta.auth ? next() : next('/403');
    } else {
        next();
    }
});

// http拦截器挂载全局
Vue.prototype.$http = axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#usersApp');