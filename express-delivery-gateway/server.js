var http = require('http');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router = require('./route');
const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
const helmet = require('helmet');

router.configservices(app, httpProxy);

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var server = http.createServer(app);
server.listen(3000);