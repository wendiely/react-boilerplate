const webpack = require("webpack");
const path = require("path");
const version = String(require("./package.json").version);
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");

const publicPath = "/" + version + "/";

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "./dist/" + version),
    publicPath: publicPath
  },
  resolve: {
    extensions: [".js"],
    alias: {
      components: path.resolve(__dirname, "./src/components")
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ["babel-loader"],
        include: [path.resolve(__dirname, "src")]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader", "postcss-loader"]
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // 小于8k的图片自动转成base64格式，并且不会存在实体图片
              outputPath: "images/" // 图片打包后存放的目录
            }
          }
        ]
      },
      {
        test: /\.(htm|html)$/,
        use: "html-withimg-loader"
      },
      {
        test: /\.(eot|ttf|woff|svg)$/,
        use: "file-loader"
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  plugins: [
    // 打包前先清空
    new CleanWebpackPlugin(["dist"], {
      verbose: false
    }),
    //根据模版生成HTML
    new HtmlWebpackPlugin({
      title: "react-boilerplate",
      template: path.resolve(__dirname, "./entry/index.ejs"),
      filename: path.resolve(__dirname, "./dist/index.html"),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: "dependency"
      // favicon: "./public/icon.ico"
    }),

    new webpack.optimize.ModuleConcatenationPlugin(),

    //CSS单独打包
    new ExtractTextPlugin({
      filename: "[name].css",
      allChunks: true,
      ignoreOrder: true
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
