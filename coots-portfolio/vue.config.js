const { defineConfig } = require('@vue/cli-service')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/_reset.scss";
          @import "@/assets/styles/_variables.scss";
          @import "@/assets/styles/_fonts.scss";
        `,
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@babel': require.resolve('@babel/core'),
        'matter-js': require.resolve('matter-js/build/matter.js'),
        'poly-decomp': require.resolve('poly-decomp/build/decomp.js'),
        '@': '/src',
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
      new webpack.DefinePlugin({
        // This is just here to fix a warning
        // https://github.com/vuejs/vue-cli/pull/7443
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      },)      
    ],
  },  
})