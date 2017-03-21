const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const parts = require('./webpack.parts')


const PATHS = {
    build: path.join(__dirname, 'build'),
    source: path.join(__dirname, 'source'),
}

const cssModulesConfig = {
    modules: true,
    localIdentName: "[name]__[local]___[hash:base64:5]",
}

const cssLoaders = [
    {
        loader: 'css-loader',
        options: cssModulesConfig,
    },
    {
        loader: 'postcss-loader',
        options: {
            plugins: () => ([
                require('autoprefixer')
            ])
        }
    },
]

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
        ]
    },
    devtool: "cheap-module-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: "React Now Base",
            template: "source/template.ejs"
        }),
    ]
}

module.exports = function(env) {

    if (env === "production"){
        return merge(
            commonConfig,
            parts.extractCSS({
                include: PATHS.source,
                output: 'styles.css',
                loaders: cssLoaders
            })
        )
    }

    return merge(
        commonConfig,
        parts.loadCSS({
            include: PATHS.source,
            loaders: cssLoaders,
        }),
        parts.devServer
    )

}
