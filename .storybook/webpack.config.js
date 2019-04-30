const webpack = require('webpack')

module.exports = {
  plugins: [
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
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
    extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
  },
};
