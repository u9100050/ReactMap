/**
 * Created by NekrasovAA on 28.04.2016.
 */
'use strict';
let webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: "./public",
        filename: "bundle.js"
    },
    module: {
        loaders: [{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}]
    }
    , plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        // new webpack.DefinePlugin({
        //     "process.env": {
        //         NODE_ENV: JSON.stringify("production")
        //     }
        // })
    ]
};