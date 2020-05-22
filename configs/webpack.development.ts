import webpack from 'webpack';

const config: webpack.Configuration = {
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devtool: 'eval',
  devServer: {
    port: 6060,
    contentBase: './dist',
  },
};

export default config;
