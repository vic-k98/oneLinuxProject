const listenDB = require('../../function/ListenDB.js');

module.exports = (req, res, next) => {
    const reqAcount = {
        username: req.body.username,
        passwrod: req.body.password
    };
    const sendInfo = {
        code: 0,
        msg: '请求超时',
        data: {}
    }
    const loginBack = (err, data) => {
        if (err) { // 数据库操作错误
            sendInfo.code = '2';
            sendInfo.msg = '系统错误';
        } else {
            if (data.length <= 0) {
                sendInfo.code = 0;
                sendInfo.msg = '用户名或密码不正确';
            } else {
                sendInfo.code = 1;
                sendInfo.msg = '';
                sendInfo.data = {
                    name: data[0].name,
                    email: data[0].email,
                    headImg: data[0].headimg,
                }
            }
        }
        res.send(sendInfo);
    }

    listenDB({
        type: 'FIND',
        query: reqAcount,
        update: null,
        callback: loginBack
    });
}