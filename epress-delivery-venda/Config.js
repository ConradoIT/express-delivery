'use strict'
exports.appConfig = {
    Venda : {
        route: "./routes/VendaRoute",
        model: "./models/VendaModel"
    }
}

exports.addRoute = function(App, Config){
    var Model = require(Config.model);
    var Route = require(Config.route);
    Route(App);
}

exports.configDB = function(Mongoose) {
    Mongoose.Promise = global.Promise;
    Mongoose.connect('mongodb://database_venda/dbvenda');
}