'use strict'
exports.appConfig = {
    Cliente : {
        route: "./routes/ClienteRoute",
        model: "./models/ClienteModel"
    }
}

exports.addRoute = function(App, Config){
    var Model = require(Config.model);
    var Route = require(Config.route);
    Route(App);
}

exports.configDB = function(Mongoose) {
    Mongoose.Promise = global.Promise;
    Mongoose.connect('mongodb://database_cliente/dbcliente');
}