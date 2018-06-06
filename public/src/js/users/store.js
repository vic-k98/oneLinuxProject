import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);

export default new vuex.Store({
    state: {
        // userInfo: {         // 用户状态信息
        //     name: 'vic',
        //     email: 'vic98k27149@gmail.com',
        //     headImg: ''
        // },
        userInfo: null,
        collapse: false,    // 侧边栏折叠标识
    },
});