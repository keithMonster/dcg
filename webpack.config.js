const webpack = require('webpack');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
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
        "test": /\.less$/,
        "loader": "style!css!less"
    },
    {
        "test": /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        "loader": 'url-loader'
    },
    {
        "test":/\.css$/,
        "loader": "style!css"
    },
    { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader'},
];
module.exports = {
    entry: {
        main: './main.js'
    },
    output: {
        path: './',
        filename: 'build.js'
    },
    resolve: {
        alias: {}
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     minimize: true,
        //     compress:{
        //         warnings: false,
        //         drop_debugger: true,
        //         drop_console: true
        //     }
        // }),
       // new ExtractTextPlugin("styles.css")
    ],
    module: {
        loaders: loaders
    },
    watch: true
};
