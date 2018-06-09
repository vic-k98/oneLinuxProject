import axios from 'axios';

const $axios = axios.create();

// 添加请求拦截器
$axios.interceptors.request.use((config) => {
    console.log('拦截到的请求配置：', config);
    return config;
}, err => Promise.reject(err));

// 添加响应拦截器
$axios.interceptors.response.use(res => {
    console.log('拦截到的响应消息：', res);
    return res.data;
}, err => { // 请求报错，服务器500，取消上一个请求等都会跑到这里来
    console.log('请求报错信息：');
    console.log(err);
    return Promise.reject(err);
});

export default $axios;