module.exports = {
  publicPath: '/',
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
