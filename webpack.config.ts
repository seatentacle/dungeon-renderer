import path from 'path';
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import development from './configs/webpack.development';
import production from './configs/webpack.production';

type WEBPACK_ENV = 'production' | 'development';

const NODE_ENV  = process.env.NODE_ENV as WEBPACK_ENV;
const devMode = NODE_ENV !== 'production';

const config: webpack.Configuration = webpackMerge({
  mode: NODE_ENV,
  entry: {
    app: path.resolve(__dirname, 'src/index.tsx'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'ts-loader',
        ],
        exclude: /node_modules/,
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project Cult',
      template: path.resolve(__dirname, 'src/template.html'),
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
    }),
  ],
  resolve: {
    modules: ['node_modules'],
    alias: {
      'constants': path.resolve(__dirname, 'src/constants'),
      'hooks': path.resolve(__dirname, 'src/hooks'),
      'lib': path.resolve(__dirname, 'src/lib'),
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
}, devMode ? development : production);

export default config;
