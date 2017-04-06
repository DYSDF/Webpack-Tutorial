const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: __dirname + "/src/app.js"
    },
    output: {
        path: __dirname + "/public/",
        filename: "[name].[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.vue/,
                use: [
                    {
                        loader: "vue-loader",
                        options: {
                            loaders: {
                                'scss': ExtractTextPlugin.extract({
                                    use: ['css-loader', 'sass-loader'],
                                    fallback: 'vue-style-loader'
                                })
                            },

                        },
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: [
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            "vue": "vue/dist/vue.js"
        }
    },
    // devServer: {
    // 	// contentBase: __dirname + "/public/index.html"
    // },
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
        }),
        new ExtractTextPlugin('styles.[hash:5].css')
    ]
}