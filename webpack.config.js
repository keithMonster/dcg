/**
 * Created by dcg on 16/9/19.
 */
var webpack = require('webpack');
//npm install extract-text-webpack-plugin --save-dev
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var loaders = [
    {
        "test": /\.js?$/,
        "exclude": /node_modules/,
        "loader": "babel",
        "query": {
            "presets": [
                "es2015",
                "stage-0"
            ],
            "plugins": []
        }
    },
    {
        "test": /\.vue?$/,
        "loader": "vue"
    },
    {
        test: /vux.src.*?js$/,
        loader: 'babel'
    },
    {
        "test": /\.less$/,// cnpm install style-loader css-loader --save
        "loader": ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
    },
    { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192'},
];
module.exports = {
    entry: './public/src/main.js',
    output: {
        path: './public/dist',
        publicPath: './public/dist/',
        filename: 'build.js'
    },
    // vue: {
    //     loaders: {
    //         css: ExtractTextPlugin.extract("css"),
    //         // you can also include <style lang="less"> or other langauges
    //         less: ExtractTextPlugin.extract("css!less")
    //     }
    // },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new ExtractTextPlugin("style.css")
    ],
    //plugins: [
    //    new ExtractTextPlugin("style.css"),
    //    new webpack.optimize.UglifyJsPlugin({
    //        compress: {
    //            warnings: false
    //        }
    //    })
    //],
    module: {
        loaders: loaders
    },
    watch: true
};
// "vue": "^2.0.3",
//     "vue-router": "^2.0.1"