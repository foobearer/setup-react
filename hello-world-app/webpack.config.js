var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
//where to get the files to bundle
module.exports = {
  entry: [
    './app/index.js'
  ],
  //Where you put the bundled files
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  //what are the transformations that needs to be done in your app
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};