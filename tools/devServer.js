import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config';

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  contentBase: config.output.path,
  publicPath: config.output.publicPath,
  hot: true,
  quiet: false,
  noInfo: false,
  stats: {
    colors: true,
    chunks: false,
  },
});

server.listen(8080, 'localhost');
