const path = require('path')

module.exports = {
    entry:'./src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
      // 配置模块规则
      module: {
        rules: [
            {
                test: /\.tsx?$/,    // .ts或者tsx后缀的文件，就是typescript文件
                use: "ts-loader",   // 就是上面安装的ts-loader
                exclude: "/node-modules/" // 排除node-modules目录
            }
        ]
    },
    // 模式
    mode: "development",
}