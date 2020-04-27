module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/': {
        target: 'http://manhua.weibo.cn',
        changeOrigin: true
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    }
  }
}
