var express = require('express');
var router = express.Router();

// 引入业务逻辑

/* USERS API */
router.post('/users/login', function(req, res, next) {
    const account = {
        username: req.body.username,
        password: req.body.password
    };
    const sendObj = {
        code: 0,
        msg: '请求错误',
        data: {}
    }
    // 根据请求信息匹配数据库
    if (account.username === 'vickkkk' && account.password === '123456') {
        sendObj.code = 1;
        sendObj.msg = '';
        sendObj.data = {
            name: 'vic',
            email: 'vic98k27149@gmail.com',
            headImg: 'http://k2.jsqq.net/uploads/allimg/1711/17_171129092304_1.jpg'
        }
    } else {
        sendObj.code = 0;
        sendObj.msg = '用户名或密码不正确';
    }
    res.send(sendObj);
});

module.exports = router;
