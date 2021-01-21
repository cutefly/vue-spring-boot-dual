// vue.config.js
const path = require('path')

module.exports = {
  // options...
  devServer: { // api 요청이 있을때 어디에서 처리할지를 설정
    proxy: {
      '/api': {
        target: 'http://localhost:8088/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  outputDir: path.resolve(__dirname, "../backend/src/main/resources/static")
}
