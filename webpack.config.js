module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: [
                  'es2015',
                  'react'
                ],
                plugins: []
            },
            exclude: /node_modules/
        }]
    }
};