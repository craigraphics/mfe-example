const {ModuleFederationPlugin} = require('webpack').container;
const {dependencies} = require('./package.json');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    port: 3002,
  },
  output: {
    publicPath: 'auto',
    clean: true,
  },
  module: {},
  plugins: [
    new ModuleFederationPlugin({
      name: 'libs',
      filename: 'remoteEntry.js',
      exposes: {
        './react': 'react',
        './react-dom': 'react-dom',
        './react-router-dom': 'react-router-dom',
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
  ],
};
