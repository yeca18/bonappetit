const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { getIfUtils, removeEmpty } = require('webpack-config-utils')

module.exports = env => {
  const { ifProd, ifNotProd } = getIfUtils(env)

  return {
    context: __dirname,
    entry: {
      app: './src/client/index.js',
    },
    output: {
      path: resolve(__dirname, './public/'),
      filename: ifProd('js/bundle.[name].[chunkhash].js', 'js/bundle.[name].js'),
      pathinfo: ifNotProd(),
    },
    devtool: ifProd('cheap-module-source-map', 'source-map'),
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
      ],
    },
    externals: [
      {
        window: 'window',
      },
    ],
    plugins: removeEmpty([
      ifProd(
        new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false,
          quiet: true,
        }),
        new webpack.LoaderOptionsPlugin({
          debug: true,
          noInfo: false,
        })
      ),
      new HtmlWebpackPlugin({
        template: './public/index-source.html',
        filename: 'index.html',
        inject: 'body',
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: ifProd('js/[name].[chunkhash].js', 'js/[name].js'),
        minChunks: Infinity,
      }),
      ifProd(
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"',
          },
        })
      ),
      ifProd(
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: false,
          output: {
            comments: false,
          },
          compress: {
            screw_ie8: true,
            warnings: false,
          },
        })
      ),
    ]),
  }
}
