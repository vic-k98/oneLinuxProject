const path = require('path');
const multilpleConfig = require('./multilple-config.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: multilpleConfig.entries,
    output: {
        filename: '[name].mix.js',
        path: path.resolve(__dirname, '../build/js')
    },
    module: {
        rules: [
            { 
                test: /\.css$/,
                use: ExtractTextPlugin.extract('css-loader', 'style-loader')
            },
            { 
                test: /\.less$/,
                use: ExtractTextPlugin.extract('css-loader', 'style-loader', 'less-loader')
            },
            {
                test: /\.(png|jpg)$/,
                use: [{loader: 'url-loader?limit=8192&name=../img/[name].[ext]'}]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '../css/[name].mix.css'
        }),
        new UglifyJSPlugin()
    ]
}