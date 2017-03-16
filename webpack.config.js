var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/js',
    output: {
        path: './static/',
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader'],
                include: __dirname + '/src'
            },
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract([{
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[name]__[local]___[hash:base64:5]"
                        }
                    }]),
                include: __dirname +  '/src'
            }
        ]
    },
    plugins: [new ExtractTextPlugin('css/bundle.css')]
}
