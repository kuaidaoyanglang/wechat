const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        styles: resolve('src/assets/styles')
      }
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8081',
          pathRewrite: {
            '^/api': '/mock'
          }
        }
      }
    }
  }
};
