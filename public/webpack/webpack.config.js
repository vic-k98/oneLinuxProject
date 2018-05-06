const path = require('path');
const multilpleConfig = require('./multilple-config.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
                use: [
                    {loader: "css-loader"},
                    {loader: "less-loader"}
                ]
            },
            { 
                test: /\.less$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "less-loader"}
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(path.resolve(__dirname, '../build/css/style.css'))
    ]
}