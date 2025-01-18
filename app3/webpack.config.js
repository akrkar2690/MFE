const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.jsx?$/, // Transpile JSX and JavaScript files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // Handle .css files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/, // Handle .scss files
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 5000,
    open: true,
    hot: true, // Enable hot module replacement if you want it
    compress: false, // Enable gzip compression
    historyApiFallback: true, // Useful for single-page apps (SPA)
  },
  plugins: [
    new ModuleFederationPlugin({
        name: 'newApp',
        filename: 'remoteEntry.js',
        exposes: {
            './AppComp': './src/components/App3'
        },
        shared: {
            'react': {
              singleton: true
            },
            'react-dom': {
              singleton: true
            }
          }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};