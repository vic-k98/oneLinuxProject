const path = require('path');

module.exports = {
    multiple: {
        multipleFlag: true,
        jsEntryLib: path.resolve(__dirname, '../../src/js'),
        main: path.resolve(__dirname, '../../src/main.js')
    }
}