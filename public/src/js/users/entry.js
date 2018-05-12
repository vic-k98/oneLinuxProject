import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/zh-TW';

// 组件引入
import home from './home.vue';
import test from './component/test.vue';

// 注册组件
Vue.use(VueRouter);
Vue.use(ElementUI, { locale });

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