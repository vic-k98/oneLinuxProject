const path = require('path');
const glob = require('glob');
const config = require('./config');

// 多页面入口配置
if (config.multiple && config.multiple.multipleFlag) {
    const jsEntryLibPath = config.multiple.jsEntryLib;
    const jsEntriesFile = glob.sync(`${jsEntryLibPath}/**/*.js`);
    const entries = {};

    jsEntriesFile.forEach(jsItem => {
        dirname = path.dirname(jsItem);//当前目录
        extname = path.extname(jsItem);//后缀
        basename = path.basename(jsItem, extname);//文件名
        pathname = path.join(dirname, basename);//文件路径
        const longKey = pathname.replace(/\\/g, '.');
        const key = longKey.substring(longKey.indexOf('src.js'));
        entries[key] = jsItem;
    });
    module.exports = {
        entries: entries
    }
} else {
    const mainFile = config.multiple && config.multiple.main;
    module.exports = {
        entries: {
            main: mainFile || path.resolve(__dirname, '../src/main.js')
        }
    }
}