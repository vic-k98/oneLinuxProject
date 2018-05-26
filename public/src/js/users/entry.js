import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';

// 注册 element-ui 组件
Vue.use(ElementUI, { size: 'smail' });

new Vue({
    router,
    render: h => h(App)
}).$mount('#usersApp');