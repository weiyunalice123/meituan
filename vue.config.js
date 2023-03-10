module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({ rootValue: 37.5, propList: ['*'] }),
        ],
      },
    },
  },
  /*devServer: {
    port: 8081,
    compress: true,
    https: true
  }*/
};