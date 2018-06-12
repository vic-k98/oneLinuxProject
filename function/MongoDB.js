const MongoClient = require('mongodb').MongoClient; // 引入数据库连接模块
const event = require('./Events.js');

module.exports = {
    // 初始化链接数据库
    init(callback, opt) {
        const defineOpt = {
            dbUrl: 'mongodb://localhost:27017',
            dbName: 'vickkkk',
            tableName: 'usersinfo'
        };
        opt = opt || defineOpt;
        MongoClient.connect(opt.dbUrl || defineOpt.dbUrl, (err, client) => { // 创建数据库连接，并打开
            if (err) return event.emit('DB_CONNECT_ERROR' , err);
            const uc = client.db(opt.dbName || defineOpt.dbName).collection(opt.tableName || defineOpt.tableName);
            callback(uc);
            client.close(); // 关闭数据库
        });
    },
    // 查询
    find(query, opt) {
        this.init(uc => {
            uc.find(query).toArray((err, data) => {
                if (err) return event.emit('DB_FIND_ERROR' , err);
                event.emit('DB_FIND_SUCCESS' , data);
            });
        }, opt);
    },
    // 添加
    insert(query, opt) {
        this.init(uc => {
            uc.insert(query , (err , data) => {
                if (err) return event.emit('DB_INSERT_ERROR', err);
                event.emit('DB_INSERT_SUCCESS' , data.result);
            });
        }, opt);
    },
    // 删除
    remove(query, opt) {
        this.init(uc => {
            uc.remove(query, (err, data) => {
                if (err) return event.emit('DB_REMOVE_ERROR', err);
                event.emit('DB_REMOVE_SUCCESS' , data.result);
            });
        }, opt);
    },
    // 更新
    update(query, update, opt) {
        this.init(uc => {
            uc.update(query, {$set: update}, (err, data) => {
                if (err) return event.emit('DB_UPDATE_ERROR', err);
                event.emit('DB_UPDATE_SUCCESS' , data.result);
            });
        }, opt);
    }
};