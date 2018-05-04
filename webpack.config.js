const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ChunkSorter = require('./chunk-sorter');

const orderedChunks = [
    'vendors',
    'app'
];

const cleanOptions = {
    root: path.join(__dirname),
    verbose: true,
    dry: false
}

const WebpackConfig = {
    devtool: 'source-map',
    entry: {
        vendors: path.join(__dirname, 'src','vendors.js'),
        app: path.join(__dirname, 'src','index.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: [/node_modules/], loader: 'ng-annotate-loader!babel-loader' },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.less$/, exclude: [/node_modules/], loader: 'style-loader!css-loader!less-loader' },
            { test: /\.css$/, exclude: [/node_modules\/(?!(bootstrap)\/).*/], loader: 'style-loader!css-loader' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.(woff|woff2)$/, loader: "url-loader?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.(jpe?g|png|gif)$/i, loader: "url-loader" },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], cleanOptions),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: Infinity
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/index.html',
            chunksSortMode: ChunkSorter.bind(orderedChunks)
        }),
    ]
};

module.exports = WebpackConfig;