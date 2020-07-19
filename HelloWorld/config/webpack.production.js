const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, '../src/components/index.js'),
  output: {
    path: path.join(__dirname, '../lib'),
    filename: 'js/main.js',
    chunkFilename: 'js/[name].[hash:6].chunk.js',
    libraryTarget: 'umd'
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
              plugins: ['@babel/plugin-proposal-class-properties']
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
  plugins: [
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //     title: 'welcome title',
    //     template: path.join(__dirname, '../public/index.html')
    // }),
    // new ExtractTextPlugin({
		// 	filename: cssFilename,
		// 	allChunks: true
		// }),
  ]
};
