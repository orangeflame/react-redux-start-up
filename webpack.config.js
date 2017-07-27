module.exports = {
    entry: "./app/app.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [
        {
            test: /\.jsx$/,
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