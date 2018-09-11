'use strict'
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var SchemaVenda = new schema({
     DataVenda  : {type: Date, required: "Data da venda precisa ser informada"},
     IdCliente  : {type: String, required: "Cliente deve ser informado para venda"},
     Produtos : [{type: String }],
     Total : {type: Number, required: "Total da venda deve ser informado"}
});

module.exports = mongoose.model('Venda', SchemaVenda);