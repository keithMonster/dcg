const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const rules = [
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        },
        {
            test: /\.less/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'less-loader']
            })
        },
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.vue$/,
            use: {
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader'
                        }),
                        stylus: ExtractTextPlugin.extract({
                            use: ['css-loader', 'stylus-loader']
                        })
                    }
                }
            }
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use:
                [
                    'file-loader'
                ]
        }
        ,
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use:
                [
                    'file-loader'
                ]
        }
    ]
;
module.exports = {
    entry: {
        main: './main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].build.js'
    },
    module: {rules},
    devtool: 'inline-source-map',
    plugins: [
        //new CleanWebpackPlugin(['dist']),
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings: false
        //    },
        //    sourceMap: true
        //}),
        new ExtractTextPlugin({
            filename: 'styles.css'
        })
    ],
    watch: true
};
