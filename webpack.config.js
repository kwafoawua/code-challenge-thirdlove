const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const config = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
    extensions: [ '.js', '.jsx' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  mode: 'development',
  devtool: 'eval-source-map',

  devServer: {
    hotOnly: true,
    contentBase: path.resolve(__dirname, 'src'),
    historyApiFallback: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    port: '3000',
    publicPath: '/',
  },
}

module.exports = config