const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 相对于[path + publicPath]
const cssFilename = 'css/[name].css';

module.exports = {
  mode: 'development',
  entry: {
    common: require.resolve('./polyfills'),
    main: path.join(__dirname, '../src/index.js'),
  },
  output: {
    filename: 'static/[name].bundle.js',
    chunkFilename: 'static/chunk/[name].[hash:6].chunk.js',
    path: path.join(__dirname, '../build'),
    publicPath: './'
  },
  externals : {
    'react': 'React',
  },
  module: {
    rules: [
      {
        test:/\.(png|jpg|jpeg|gif)$/,
        use:[
            {
                loader:"url-loader",
                options:{
                    limit:50000,   //表示低于50000字节（50K）的图片会以 base64编码
                    outputPath:"image",
                    name:'[name].[hash:5].[ext]',
                    // pulbicPath:"./dist/asset/images"
                }
            }
        ]
      },
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
      },
    ]
  },
  devServer: {
    // 内存打包后，文件放在这个位置，需要访问这个位置才能访问到文件
    publicPath: '/',
    hot: true,
    open: true,
    port: 3001,
    overlay: false,
    quiet: true,
    historyApiFallback: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        // title: 'welcome title',
        template: path.join(__dirname, '../public/index.html'),
        inject: true,
        chunksSortMode: function(a, b){
          return 1;
        },
    }),
    new ExtractTextPlugin({
			filename: cssFilename,
			allChunks: true
		}),
  ]
};
