var express = require('express');
var server = express();
var port = process.env.PORT || 3000;

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Manager = require('./Config');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

Manager.addRoute(server, Manager.appConfig.Cliente);
Manager.configDB(mongoose);

server.listen(port, function() {
   console.log('Service on'); 
});
