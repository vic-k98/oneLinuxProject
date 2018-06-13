import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);

export default new vuex.Store({
    state: {
        userInfo: null,     // 用户状态信息
        collapse: false,    // 侧边栏折叠标识
    },
    mutations: {
        setUserInfo (state, info) { // 设置用户信息
            state.userInfo = info;
        }
    }
});