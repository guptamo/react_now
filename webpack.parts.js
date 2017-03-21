const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


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
