var express = require('express');
var router = express.Router();

// 引入业务逻辑
const userslogin = require('../servers/users/login.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users/users', {title: 'User Center', iconLink: '//img.alicdn.com/tps/TB1HwXxLpXXXXchapXXXXXXXXXX-32-32.ico'});
});

router.post('/login', function(req, res, next) {
    userslogin(req, res, next);
});

module.exports = router;
