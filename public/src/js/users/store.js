import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);

export default new vuex.Store({
    state: {
        collapse: false,     // 侧边栏折叠标识
    },
});