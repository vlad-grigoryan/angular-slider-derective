var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    entry: {
        'styles': ['./client/styles/app.scss'],
        'vendor': ['angular', 'angular-ui-router'],
        'app': ['./client/app/app.module.js']
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json']
    },
    output: {
        path: path.resolve(__dirname, 'client/build'),
        filename: '[name].bundle.js',
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", include: path.join(__dirname, 'client/app') },
            { test: /\.(html)$/, loader: 'raw-loader' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("css-loader!sass-loader")},
            { test: /\.(jpg|png)$/, loader: 'url?limit=25000'}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            mangle: false,
            sourcemap: true,
            minimize: false,
            comments: false
        }),
        // new OpenBrowserPlugin(),
        new ExtractTextPlugin("styles.bundle.css")
    ],
    devtool: "#inline-source-map"
};