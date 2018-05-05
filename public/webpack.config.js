const path = require('path');

module.exports = {
    entry: {
        test: path.resolve(__dirname, './src/js/test.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './build/js')
    }
}