import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const config: webpack.Configuration = {
  output: {
    filename: '[name].bundle.[hash].js',
  },
  optimization: {
    noEmitOnErrors: true,
  },
  devtool: 'hidden-source-map',
  plugins: [
    new CleanWebpackPlugin(),
  ],
};

export default config;
