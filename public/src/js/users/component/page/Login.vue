<template>
    <div class="login-wrap">
        <div class="login-content">
            <el-form :model="formData" :rules="rules" ref="ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="formData.username" placeholder="username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="formData.password" placeholder="password"></el-input>
                </el-form-item>
                <el-button type="primary" class="login-btn" @click="submitForm('ruleForm')">登陆</el-button>
                <p class="login-tips" v-if="tips">Tips: {{ tips }}</p>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formData: { // 用户数据
                    username: 'vickkkk',
                    password: '123456',
                },
                rules: { // 表单校验规则
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 18, message: '用户名长度为 3 到 18 位', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 18, message: '密码长度为 6 到 18 位', trigger: 'blur' }
                    ]
                },
                tips: '', // 错误提示语
            }
        },
        methods: {
            submitForm(formName) { // 提交表单
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        this.requiredLogin();
                    } else {
                        return false;
                    }
                });
            },
            requiredLogin() { // 请求登陆验证
                this.$http.post('/users/login', {
                    username: this.formData.username,
                    password: this.formData.password
                }).then((res) => {
                    // if (res.status === 200) {

                    // }
                    sessionStorage.setItem('ms_userinfo', JSON.stringify({
                        name: this.formData.username,
                        email: 'vic98k27149@gmail.com',
                        headImg: 'http://k2.jsqq.net/uploads/allimg/1711/17_171129092304_1.jpg'
                    }));
                    this.$router.push('/');
                }).catch((res) => {
                    // console.log(res);
                });
                return;
                this.tips = '';
                sessionStorage.setItem('ms_userinfo', JSON.stringify({
                    name: this.formData.username,
                    email: 'vic98k27149@gmail.com',
                    headImg: 'http://k2.jsqq.net/uploads/allimg/1711/17_171129092304_1.jpg'
                }));
                this.$router.push('/');
            }
        }
    }
</script>

<style lang="less">
    .login-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        // background: url('../../../../bgImg/usersBg.jpg') no-repeat center;
        // background-size: cover;
        background: #324157;
    }
    .login-content {
        position: absolute;
        left: 50%;
        top: 30%;
        margin-left: -220px; 
        width: 360px;
        padding: 40px;
        border-radius: 5px;
        background: rgba(255,255,255,1);
    }
    .login-btn {
        width: 100%;
    }
    .login-tips {
        line-height: 30px;
        font-size: 12px;
        color: #cc0000;
    }
</style>
