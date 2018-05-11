const path = require('path');
const glob = require('glob');
const config = require('./config');

// 多页面入口配置
if (config.multiple && config.multiple.multipleFlag) {
    const jsEntryLibPath = config.multiple.jsEntryLib;
    const jsFile = glob.sync(`${jsEntryLibPath}/*.js`);
    const jsFolderFile = glob.sync(`${jsEntryLibPath}/**/entry.js`);
    const jsEntriesFile = jsFile.concat(jsFolderFile);
    const entries = {};

    jsEntriesFile.forEach(jsItem => {
        dirname = path.dirname(jsItem);//当前目录
        extname = path.extname(jsItem);//后缀
        basename = path.basename(jsItem, extname);//文件名
        const dirnameFormat = dirname.replace(/(\\|\/)/g, '.');
        const folderName = dirnameFormat.substring(dirnameFormat.indexOf('src.js') + 6);

        if (folderName) {
            entries[`${folderName}.${basename}`] = jsItem;
        } else {
            entries[basename] = jsItem;
        }

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