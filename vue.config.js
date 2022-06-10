const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule('js')
      .test(/\.js/)
      .exclude.add(/node_modules\/mapbox-gl/)
      .end()
  },
});
