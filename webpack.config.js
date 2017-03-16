const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const loaders = [
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
        "test": /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        "loader": 'url-loader'
    },
    {
        "test": /\.css$/,
        "loader": "style!css"
    },
    {
        "test": /\.less$/,
        "loader": ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
    },
    {test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader'},
];
module.exports = {
    entry: {
        main: './main.js'
    },
    output: {
        path: './dist/',
        filename: 'build.js'
    },
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract("css"),
            // you can also include <style lang="less"> or other langauges
            less: ExtractTextPlugin.extract("css!less")
        }
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            // minimize: true,
            compress: {
                warnings: false,
                // drop_debugger: true,
                // drop_console: true
            }
        }),
        new ExtractTextPlugin("styles.css")
    ],
    module: {
        loaders: loaders
    },
    watch: true
};
