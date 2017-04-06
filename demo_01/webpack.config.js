
module.exports = {
	entry: {
		main: __dirname + "/src/js/app.js"
	},
	output: {
		path: __dirname + "/public/js/",
		filename: "[name].js"
	},
	resolve: {
		alias: {
			"vue": "vue/dist/vue.js"
		}
	}
}