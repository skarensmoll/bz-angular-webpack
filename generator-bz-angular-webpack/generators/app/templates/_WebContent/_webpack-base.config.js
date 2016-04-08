var PathRewriterPlugin = require('webpack-path-rewriter');
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        'helloworld.app': './app/app'
        //'helloworld.appConfig': './app/commons/config/config'
    },
    output: {
        path: 'app/dist',
        filename: '[name].[chunkhash].js',
        publicPath: './WebContent/app/dist/'
    },
    module: {
        loaders: [
            {
                test: /[.]jade$/,
                loader: PathRewriterPlugin.rewriteAndEmit({
                    //name: '[path][name].html',
                    name: '../../../[name].html', //generate index.html on root folder
                    loader: 'jade-html?' + JSON.stringify({pretty: true})
                })
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html'
            },
            {
                test: /\.(png|jpg|gif)(\?.*$|$)/,
                exclude: /node_modules/,
                loader: 'file-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /.json/,
                exclude: /node_modules/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new PathRewriterPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'moment': 'moment'
        })
    ]
};