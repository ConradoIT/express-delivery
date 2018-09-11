'use strict'
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var schemaEndereco = require('./EnderecoModel');

var SchemaCliente = new schema({
    Nome : { type: String, required: "Nome do cliente é obrigatorio"},
    Cpf : { type: String, required: "cpf do cliente é obrigatorio" },
    Endereco : [ schemaEndereco.SchemaEndereco ]
});

module.exports = mongoose.model('Cliente', SchemaCliente);
exports.SchemaCliente = SchemaCliente;