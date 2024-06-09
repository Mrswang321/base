const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: {
    app: './src/app.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },

  devtool: 'source-map',

  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },

  // module: {
  //   rules: [
  //     {
  //       test: /\.m?j(s|sx)$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: 'babel-loader'
  //       }
  //     }
  //   ]
  // },

  plugins: [
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'index.html',
      template: './public/index.html'
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, "./dist")
  }
}