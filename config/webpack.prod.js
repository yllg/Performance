const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: [
      path.join(__dirname, '../src/public/scripts/index-es.es'),
      path.join(__dirname, '../src/public/scripts/indexadd.js')
    ],
    tags: [
      path.join(__dirname, '../src/public/scripts/tags.es'),
      path.join(__dirname, '../src/public/scripts/star.es')
    ]
  },
  output: {
    filename: 'public/scripts/[name].js',
    publicPath: 'http://192.168.31.25:3000/',
    path: path.join(__dirname, '../build')
  },
  module: {
    rules: [{
        test: /\.es$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'prod'
      }
    }),
    new LiveReloadPlugin({
      appendScriptTag: true
    }),
    new ExtractTextPlugin("public/css/[name].css"),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings:false,
        drop_console:false
      }
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'public/scripts/common/[name].min.js',
    }),
    new HtmlWebpackPlugin({ 
      filename: './views/layout.html',
      template: 'src/widget/layout.html',
      inject:false
    }),
    new HtmlWebpackPlugin({ 
      filename: './views/index.html',
      template: 'src/views/index.js',
      inject:false,
      chunks:['vendor','index','tags']
    }),
    new HtmlWebpackPlugin({ 
      filename: './widget/index.html',
      template: 'src/widget/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: './views/star.html',
      template: 'src/views/star.js',
      inject: false,
      chunks: ['vendor', 'index', 'tags']
    }),
    new HtmlWebpackPlugin({
      filename: './widget/star.html',
      template: 'src/widget/star.html',
      inject: false
    }),
    new HtmlWebpackPlugin({ 
      filename: './views/404.html',
      template: 'src/widget/404.html',
      inject:false
    })
  ]
};