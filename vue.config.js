// const path = require('path');

module.exports = {
  publicPath: '/',
  // outputDir: 'dist',
  // assetsDir: '../public/images/',
  // chainWebpack(config) {
  //   config
  //     .entry('app')
  //     .clear()
  //     .add('./src/main.js')
  //     .end();
  //   config.resolve.alias
  //     .set('@', path.join(__dirname, './src'))
  //     .set('@img', path.join(__dirname, './public/images'))
  //     //.set('#', path.join(__dirname, './src/modules'))
  // },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/assets/global.scss";
        `
      },
    }
  },
}
