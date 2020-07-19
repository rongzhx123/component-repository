const path = require('path');

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../lib'),
    filename: 'js/[name].[hash:6].bundle.js',
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
};
