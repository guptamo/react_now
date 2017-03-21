const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const parts = require('./webpack.parts')


const PATHS = {
    build: path.join(__dirname, 'build'),
    source: path.join(__dirname, 'source'),
}

const commonConfig = {
    entry: PATHS.source,
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader'],
                include: PATHS.source,
            },
            // {
            //     test: /\.css/,
            //     use: ExtractTextPlugin.extract([{
            //             loader: "css-loader",
            //             query: {
            //                 modules: true,
            //                 sourceMap: true,
            //                 localIdentName: "[name]__[local]___[hash:base64:5]"
            //             }
            //         }]),
            //     include: SOURCE_PATH
            // }
        ]
    },
    devtool: "cheap-module-source-map",
    plugins: [
        // new ExtractTextPlugin('css/bundle.css'),
        new HtmlWebpackPlugin({
            title: "React Now Base",
            template: "source/template.ejs"
        }),
    ]
}

module.exports = function(env) {
    console.log('env: ', env)

    if (env === "production"){
        return merge(commonConfig, parts.loadCSS(PATHS.source))
    }

    return merge(commonConfig, parts.loadCSS(PATHS.source), parts.devServer)

}
