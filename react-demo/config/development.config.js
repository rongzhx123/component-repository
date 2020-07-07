const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 相对于[path + publicPath]
const cssFilename = 'css/[name].css';

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: 'static/[name].bundle.js',
    chunkFilename: 'static/chunk/[hash:6].chunk.js',
    path: path.join(__dirname, '../build'),
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/react', '@babel/preset-env'],
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  devServer: {
    // 这个路径映射到打包后的build
    publicPath: '/',
    hot: true,
    open: true,
    port: 3000,
    inline: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'welcome title',
        template: path.join(__dirname, '../public/index.html')
    }),
    new ExtractTextPlugin({
			filename: cssFilename,
			allChunks: true
		}),
  ]
};
