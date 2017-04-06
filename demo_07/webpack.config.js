const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Webpack = require("webpack");

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
        new ExtractTextPlugin('styles.[hash:5].css'),
        new Webpack.optimize.UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告
                warnings: false,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
            }
        })
    ]
}