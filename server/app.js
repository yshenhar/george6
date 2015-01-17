var express = require('express');
var routes = require('./routes');
var app = express();

app.use('/', express.static(__dirname + '/static'));
app.use('/api', routes);

module.exports = app;
