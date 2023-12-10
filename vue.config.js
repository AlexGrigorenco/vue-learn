const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "/vue-learn/",
  transpileDependencies: true,
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@': path.resolve(__dirname, 'src'),
  //     },
  //   },
  // },
})
