const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: {
        app: './src/main.ts',
        vendor: './src/vendor.ts'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                loader: ["awesome-typescript-loader", "angular2-template-loader"]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names:['vendor']
        })
    ]
}