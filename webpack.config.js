const path = require('path');

const webpackConfig = {
  entry: ['babel-polyfill', path.resolve(__dirname, './src/index.jsx')],
  node: {
    fs: 'empty',
  },
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'inline-source-map',
};

webpackConfig.module.loaders.push({
  test: /\.js[x]?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: { presets: ['es2015', 'stage-0', 'react'] },
});

webpackConfig.module.loaders.push({
  test: /\.(css)$/,
  loaders: ['style-loader', 'css-loader?url=false'],
});

webpackConfig.module.loaders.push({
  test: /\.(png|jpg|gif|jpeg)$/i,
  loader: 'file-loader?name=assets/[name].[ext]',
});

module.exports = webpackConfig;
