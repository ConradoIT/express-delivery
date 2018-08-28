'use strict'
exports.appConfig = {
    Produto : {
        route: "./routes/ProdutoRoute",
        model: "./models/ProdutoModel"
    }
}

exports.addRoute = function(App, Config){
    var Model = require(Config.model);
    var Route = require(Config.route);
    Route(App);
}

exports.configDB = function(Mongoose) {
    Mongoose.Promise = global.Promise;
    Mongoose.connect('mongodb://database-produto/produtosdb');
}