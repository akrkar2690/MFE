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
    port: 3000,
    open: true,
    hot: true, // Enable hot module replacement if you want it
    compress: false, // Enable gzip compression
    historyApiFallback: true, // Useful for single-page apps (SPA)
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'hostApp',
      filename: 'remoteEntry.js',
      remotes: {
        remoteApp: 'remoteApp@http://localhost:4000/remoteEntry.js', // Remote app URL
        newApp: 'newApp@http://localhost:5000/remoteEntry.js',
        hostApp: 'hostApp@http://localhost:3000/remoteEntry.js'
      },
      exposes: {
        './GlobalContext': './src/context/GlobalContext'
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
