'use strict';
var mongoose = require('mongoose');
var Cliente = mongoose.model('Cliente');

exports.Select = function(req, res) {
   Cliente.find({}, function(err, Cliente){
      if (err)
         res.send(err);
      res.json(Cliente);
   });
};

exports.Insert = function(req, res) {
   console.log(req.body);
   var NewCliente = new Cliente(req.body);
   NewCliente.save(function(err, Cliente){
      if (err)
        res.send(err);
      res.json(Cliente);
   });
};

exports.Find = function(req, res) {
    Cliente.findById(req.params.ClienteID, function(err, Cliente){
       if (err)
         res.send(err);
       res.json(Cliente);
    });
};

exports.Update = function(req, res) {
    Cliente.findOneAndUpdate({_id: req.params.ClienteID}, req.body, { new: true }, function(err, Cliente){
       if (err)
         res.send(err);
       res.json(Cliente);
    });
}

exports.Delete = function(req, res) {
    Cliente.remove({ _id: req.params.ClienteID }, function(err, Cliente){
       if(err)
         res.send(err);
       res.json({ message: 'Cliente Removido com sucesso '});
    });
}