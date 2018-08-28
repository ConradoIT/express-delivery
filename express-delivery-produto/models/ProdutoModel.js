'use strict'
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var SchemaProduto = new schema({
    Nome : { type: String, required: "Nome do produto é obrigatorio"},
    Descricao : { type: String, required: "Descricao do produto é obrigatoria" },
    Imagens : [ { type: String } ],
    Preco : { type : Number, required: "Preco do produto é obrigatorio"}
});

module.exports = mongoose.model('Produto', SchemaProduto);
exports.SchemaProduto = SchemaProduto;