const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'example.boudle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), // 源文件
            filename: 'index.html' // 输出在服务器根目录的文件名, 文件存放在内存中, 不会在磁盘上显示
        })
    ],
    module: {
        rules: [
            // loader的加载顺序是从右到左的
            // css-loader是帮助webpack编译css文件. 而style-loader是将最终编译的结果放到HTML中生效
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(gql|graphql)$/,
                use: [{
                    loader: path.resolve(__dirname, '../lib/index.js'),
                    options: {}
                }]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        host: 'localhost',
        open: true,
        hot: true,
        //hotOnly: true,
    }
}
