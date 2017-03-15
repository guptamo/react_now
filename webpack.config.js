module.exports = {
    entry: './src/js',
    output: {
        path: './static/js/',
        filename: 'bundle.js'
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
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ],
                include: __dirname +  '/src'
            }
        ]
    }
}
