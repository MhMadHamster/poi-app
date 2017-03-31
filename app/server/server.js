import Express from 'express';
import httpProxy from 'http-proxy';
import path from 'path';
import morgan from 'morgan';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config.dev';

const app = Express();
const compiler = webpack(webpackConfig);
const proxy = httpProxy.createProxyServer({});

app.use(webpackMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
  },
}));
app.use(webpackHotMiddleware(compiler));

app.use(morgan('dev'));

proxy.on('error', (err) => {
  console.log(err);
});

app.use('/api', (req, res) => {
  proxy.web(req, res, {
    target: 'http://localhost:3333',
  });
});

app.use('/dist', Express.static(__dirname + '../../dist'));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, () => console.log('App server is listening on port 3000...'));
