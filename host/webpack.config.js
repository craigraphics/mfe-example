const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const { dependencies } = require('./package.json');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
  devServer: {
    hot: false,
    static: path.join(__dirname, 'dist'),
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        remote: 'remote@[remoteUrl]/remoteEntry.js',
        libs: 'libs@[libsUrl]/remoteEntry.js',
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies['react'],
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
        '@emotion/react': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
        '@emotion/styled': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
        '@mui/material': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new LiveReloadPlugin({
      port: 35729,
    }),
  ],
};
