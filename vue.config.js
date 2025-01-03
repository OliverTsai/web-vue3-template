const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://interface.bet007.com',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }
})
