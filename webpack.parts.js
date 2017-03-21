const webpack = require('webpack')

const cssConfig = {
    modules: true,
    sourceMap: true,
    localIdentName: "[name]__[local]___[hash:base64:5]",
}

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

exports.loadCSS = function(include, exclude){
    return {
        module: {
            rules: [
                {
                    test: /\.css/,
                    include,
                    exclude,
                    use: [
                        {
                            loader:'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: cssConfig,
                        },
                    ],
                },
            ]
        }
    }
}
