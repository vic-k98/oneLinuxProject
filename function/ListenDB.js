const event = require('./Events.js');
const db = require('./MongoDB.js');

module.exports = ({
    type,
    query,
    update,
    opt,
    callback
}) => {
    // 每一次查询清除所有的事件监听
    event.removeAllListeners();

    // 数据库连接错误时
    event.once('DB_CONNECT_ERROR' , err => {
        callback ? callback(err = `Error CONNECT: ${err}`, null) : console.log(`Error CONNECT: ${err} && callback null`);
    });

    // 数据库操作失败
    event.once('DB_' + type + '_ERROR' , err => {
        callback ? callback(err = `Error ${type}: ${err}`, null) : console.log(`Error ${type}: ${err} && callback null`);
    });
    
    // 数据库操作成功
    event.once('DB_' + type + '_SUCCESS' , data => {
        callback ? callback(null, data) : console.log('SUCCESS but callback null');
    });

    switch(type) {
        case 'FIND':
            db.find(query, opt);
            break;
        case 'INSERT':
            db.insert(query, opt);
            break;
        case 'REMOVE':
            db.remove(query, opt);
            break;
        case 'UPDATE':
            db.update(query, update, opt);
            break;
        default: 
            callback('Type Error');
    }
};