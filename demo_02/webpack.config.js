const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		index: __dirname + "/src/js/app.js"
	},
	output: {
		path: __dirname + "/public/js/",
		filename: "[name].[hash].js",
		// publicPath: "/dist"
	},
	resolve: {
		alias: {
			"vue": "vue/dist/vue.js"
		}
	},
	devServer: {
		// contentBase: __dirname + "/public/index.html"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/index.html',
			// inject: process.env.NODE_ENV !== 'production' ? 'body' : false,
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
			},
			chunksSortMode: 'dependency',
			environment: process.env.NODE_ENV
		})
	]
}