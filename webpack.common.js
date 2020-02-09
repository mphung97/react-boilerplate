const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./common-paths');

const config = {
  entry: {
  },
  output: {
    path: paths.outputPath,
    publicPath: '/',
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.scss', '.css'],
    alias: {
      '@': paths.appEntry,
    }
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(scss|sass|css)$/,
          enforce: true
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            // npm package names are URL-safe, but some servers don't like @ symbols

            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    }
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        preserveLineBreaks: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
        removeComments: true,
        removeAttributeQuotes: true
      }
    })
  ]
};
module.exports = config;
