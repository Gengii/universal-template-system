const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  chainWebpack: (config) => {
    config.module.rules.delete('svg') // 重点：删除默认配置中处理svg,
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/imgs')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
  transpileDependencies: true,// 新创建vue项目后,会出现第一行代码爆红的现象,解决它的方法: transpileDependencies: true
  publicPath: './',
  devServer: {
    open: true,
    port: 9527, // 端口号码
    https: false,
    host: 'localhost', // 主机名
    proxy: {
      // 匹配 '/dev-api' 开头的请求
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_URL,
        changeOrigin: true, // 开启代理
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  lintOnSave: true // 设置是否在开发环境下每次保存代码时都启用 eslint验证
}
