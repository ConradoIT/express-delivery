'use strict'
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var EnderecoSchema = new schema({
    Label : {type: String, require: 'Indentificacao do Endereco é obrigatorio'},
    Logradouro : { type: String, required: "Logradouro do cliente é obrigatorio"},
    Bairro : { type: String, required: "Bairro do cliente é obrigatorio"},
    Cidade : { type: String, required: "Cidade do cliente é obrigatorio"},
    UF : { type: String, required: "UF do cliente é obrigatorio"},
    Cep : { type: String, required: "cep do cliente é obrigatorio"}
});

module.exports = mongoose.model('Endereco', EnderecoSchema);
exports.SchemaEndereco = EnderecoSchema;