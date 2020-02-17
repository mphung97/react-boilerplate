const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const config = {
  mode: 'production',
  entry: {
    app: path.join(__dirname, '/src/index.js'),
  },
  output: {
    filename: 'js/[name].[hash].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],
};

module.exports = config;
