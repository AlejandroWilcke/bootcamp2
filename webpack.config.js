const path = require('path');

module.exports = {
    entry: './front/src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'front/dist/'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    }
};