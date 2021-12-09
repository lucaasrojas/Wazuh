const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: __dirname + "/src/index.tsx",
	output: {
		path: __dirname + "dist/",
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: { presets: ["@babel/env"] },
			},
			{
				test: /\.(t|j)sx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader'
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{ test: /\.txt$/, use: 'raw-loader' }
		],
	},
	resolve: { extensions: ["*", ".js", ".jsx", ".tsx"] },
	devServer: {
		contentBase: "./public",
		port: 8080,
		hotOnly: true,
		historyApiFallback: true,
		open: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebPackPlugin({
			template: __dirname + "/public/index.html",
			filename: "index.html",
			inject: "body"
		})
	]
};
