const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: 'static/[name].bundle.js',
    path: path.join(__dirname, '../build'),
    // publicPath: './'
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
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '../build'),
    hot: true,
    open: true,
    port: 3000,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'welcome title',
        template: path.join(__dirname, '../public/index.html')
    }),
  ]
};
