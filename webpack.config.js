const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/js/')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.vue$/, exclude: /node_modules/, loader: 'vue-loader' },
      { test: /\.s[ac]ss$/i, exclude: /node_modules/, use: ['style-loader','css-loader','sass-loader'],}
    ]
  },
  plugins: [
    new VueLoaderPlugin
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' para webpack 1
    }
  },
  mode: 'development'
}