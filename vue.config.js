const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/poc-iframe-list/" : "/",
  filenameHashing: false,
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
  },
  devServer: {
    port: 8081,
  },
});
