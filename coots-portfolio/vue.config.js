const { defineConfig } = require('@vue/cli-service')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@babel': require.resolve('@babel/core'),
      },
    },
    plugins: [
      new BrowserSyncPlugin(
        {
          host: 'localhost',
          port: 3000,
          proxy: 'http://localhost:8080/', // Default Vue CLI dev server
          files: ['./src/**/*'], // Watch source files for changes
        },
        {
          reload: false,
        }
      ),
    ],
  },  
})