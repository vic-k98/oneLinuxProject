const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const multilpleConfig = require('./multilple-config.js');

module.exports = {
    entry: multilpleConfig.entries,
    output: {
        filename: '[name].mix.js',
        path: path.resolve(__dirname, '../build/js')
    },
    module: {
        rules: [
            { 
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: { minimize: true }
                        },
                        {
                            loader: 'less-loader',
                            options: { minimize: true }
                        }
                    ]
                })
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
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    ]
}