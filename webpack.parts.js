const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BabiliPlugin = require('babili-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const cssModulesConfig = {
    modules: true,
    localIdentName: "[name]__[local]___[hash:base64:5]",
}

exports.sourceMap = function({type}){
    return {
        devtool: type,
    }
}

exports.setFreeVariable = function({key, value}){
    const env = {}
    env[key] = JSON.stringify(value)

    return {
        plugins:[
            new webpack.DefinePlugin(env),
        ],
    }
}

exports.minifyJS = function() {
    return {
        plugins: [
            new BabiliPlugin(),
            new CompressionPlugin({
                algorithm: "gzip",
            //     // test: /\.(css/js)$/,
            }),
        ],
    }
}

exports.cssLoaders = [
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

exports.devServer = function({host, port} = {}){
    return {
        devServer: {
            historyApiFallback: true,
            hotOnly: true,
            host,
            port,
            overlay: {
                errors: true,
                warnings: true,
            },
            plugins: [
                new webpack.HotModuleReplacementPlugin(),
                new webpack.NamedModulesPlugin(),
            ],
        }
    }
}

exports.extractCSS = function({include, output, loaders}){
    const plugin = new ExtractTextPlugin(output)

    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    include,
                    use: plugin.extract(loaders),
                }
            ],
        },
        plugins: [plugin],
    }
}

exports.loadCSS = function({include, loaders}){
    return {
        module: {
            rules: [
                {
                    test: /\.css/,
                    include,
                    use: [
                        {
                            loader:'style-loader'
                        },
                        ...loaders
                    ],
                },
            ]
        }
    }
}
