module.exports = {
    entry: './src/client/index.js',
    output: {
        path: __dirname + "/src/public/dist",
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                use: { loader: 'babel-loader' },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}