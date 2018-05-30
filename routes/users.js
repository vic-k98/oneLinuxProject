var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users/users', {title: 'User Center', iconLink: '//img.alicdn.com/tps/TB1HwXxLpXXXXchapXXXXXXXXXX-32-32.ico'});
});

module.exports = router;
