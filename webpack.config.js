const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: {
        app: "./src/main.ts",
        vendor: "./src/vendor.ts"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: ["awesome-typescript-loader", "angular2-template-loader"]
            },
            {
                test: /\.css$/,
                loaders: ["to-string-loader", "style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names:["vendor"]
        })
    ],
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, ""),
        port: 9000
    }
};