const path = require('path');
const express = require('express');
require('newrelic');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/:gameID', express.static(path.join(__dirname, '../public')));;

app.use('/api/getGameByID/:gameID', createProxyMiddleware({ target: 'http://localhost:3003' }));

app.use('/api/getGamesByTags/:gameID/:tag', createProxyMiddleware({ target: 'http://localhost:3003' }));

app.use('/api/getGamesBySeries/:gameID/:series', createProxyMiddleware({ target: 'http://localhost:3003' }));

module.exports.app = app;
