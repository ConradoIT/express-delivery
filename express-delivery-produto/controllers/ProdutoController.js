'use strict';
var mongoose = require('mongoose');
var Produto = mongoose.model('Produto');

exports.Select = function(req, res) {
   Produto.find({}, function(err, Produto){
      if (err)
         res.send(err);
      res.json(Produto);
   });
};

exports.Insert = function(req, res) {
   console.log(req.body);
   var NewProduto = new Produto(req.body);
   NewProduto.save(function(err, Produto){
      if (err)
        res.send(err);
      res.json(Produto);
   });
};

exports.Find = function(req, res) {
    Produto.findById(req.params.ProdutoID, function(err, Produto){
       if (err)
         res.send(err);
       res.json(Produto);
    });
};

exports.Update = function(req, res) {
    Produto.findOneAndUpdate({_id: req.params.ProdutoID}, req.body, { new: true }, function(err, Produto){
       if (err)
         res.send(err);
       res.json(Produto);
    });
}

exports.Delete = function(req, res) {
    Produto.remove({ _id: req.params.ProdutoID }, function(err, Produto){
       if(err)
         res.send(err);
       res.json({ message: 'Produto Removido com sucesso '});
    });
}