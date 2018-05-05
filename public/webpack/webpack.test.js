const path = require('path');
const multilpleConfig = require('./multilple-config.js');

module.exports = {
    entry: multilpleConfig.entries,
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../build/js')
    }
}