
const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hotOnly: true,
    // eslint-disable-next-line no-undef
    contentBase: path.resolve(__dirname, '../src'),
    historyApiFallback: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    port: '3000',
    publicPath: '/',
  },
})