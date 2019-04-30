const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: __dirname + "/dist"
  },
  resolve: {
    extensions: [".js"],
    alias: {
      components: path.resolve(__dirname, './src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["env", "react", "stage-0"]
            },
          }
        ]
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "less-loader"]
        })
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(), // 3.0新功能 范围提升 （Scope Hoisting ）
    //根据模版生成HTML
    new HtmlWebpackPlugin({
      title: 'react-boilerplate',
      chunksSortMode: 'dependency',
      template: path.resolve(__dirname, './src/index.ejs')
    }),
    //清除dist目录
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
    }),
    //js压缩
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    //CSS单独打包
    new ExtractTextPlugin('./bundle.[hash].css'),
  ]
};
