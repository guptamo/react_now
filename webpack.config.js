var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')

const PUBLIC_PATH = path.join(__dirname, 'static')
const SOURCE_PATH = path.join(__dirname, 'src')

module.exports = {
    entry: path.join(SOURCE_PATH, 'js'),
    output: {
        path: PUBLIC_PATH,
        publicPath: PUBLIC_PATH,
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader'],
                include: SOURCE_PATH
            },
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract([{
                        loader: "css-loader",
                        query: {
                            modules: true,
                            sourceMap: true,
                            localIdentName: "[name]__[local]___[hash:base64:5]"
                        }
                    }]),
                include: SOURCE_PATH
            }
        ]
    },
    devtool: "cheap-module-source-map",
    plugins: [
        new ExtractTextPlugin('css/bundle.css')
    ]
}
