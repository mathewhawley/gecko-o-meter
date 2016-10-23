import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';

const PATHS = {
  src: path.resolve(__dirname, '../src'),
  build: path.resolve(__dirname, '../build'),
  public: '/static/',
};

const config = {
  context: PATHS.src,
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server',
    './index.js'
  ],
  output: {
    path: PATHS.build,
    publicPath: PATHS.public,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: PATHS.src,
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          `css?${JSON.stringify({
            modules: true,
            sourceMap: true,
            localIdentName: '[name]__[local]__[hash:base64:5]',
          })}`,
          'postcss',
          'sass?sourceMap',
        ],
        include: PATHS.src,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: `file-loader?${JSON.stringify({
          name: '[path][name].[ext]',
        })}`,
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    root: PATHS.src,
    extensions: ['', '.js', '.scss'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
};

export default config;
