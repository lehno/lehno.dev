const path = require('path');
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const S3Plugin = require('webpack-s3-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }]
      }
    })]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.WatchIgnorePlugin([
      path.join(__dirname, "node_modules")
    ]),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }, { from: 'src/manifest.webmanifest', to: '' }]),
    process.env.NODE_ENV === 'production' && new S3Plugin({
      s3Options: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'eu-west-1'
      },
      s3UploadOptions: {
        Bucket: 'lehno.dev',
        CacheControl: (_) => 'max-age=31536000'
      },
      cloudfrontInvalidateOptions: {
        DistributionId: process.env.AWS_DISTRIBUTION_ID,
        Items: ["/*"]
      },
      directory: 'dist'
    })
  ].filter(n => n),
  // Optional for webpack-dev-server
  devServer: {
    // watchContentBase: true,
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    host: "127.0.0.1"
  },
};
