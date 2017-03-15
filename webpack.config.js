module.exports = {
    entry: './static/js/src',
    output: {
        path: './static/js/build',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                include: __dirname + '/static/js/src'
            }
        ]
    }
}
