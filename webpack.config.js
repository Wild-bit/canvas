const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        client: {
            overlay: true,
            progress: true,
        },
        compress: true,
        hot: true, //热更新
        port: 9001,// 端口号
        host: 'localhost',
    },
    // 配置模块规则
    module: {
        rules: [
            {
                test: /\.tsx?$/,    // .ts或者tsx后缀的文件，就是typescript文件
                use: "ts-loader",   // 通过 ts-loader 加载所有的 .ts 和 .tsx 文件
                exclude: "/node-modules/" // 排除node-modules目录
            },
            {
                test: /\.(j|t)sx?$/,
                exclude: "/node-modules/",
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
            inject: true
        })
    ],
    resolve: {
        extensions: ['.ts', '.js', '.tsx'],
        alias: {
            "COMMON": path.resolve(__dirname, 'common/')
        },
    },

    // 模式
    mode: "development",
}