'use strict'
module.exports = function(app) {
    var ProdutoController = require('../controllers/ProdutoController');
    
    app.route('/Produto')
       .get(ProdutoController.Select)
       .post(ProdutoController.Insert)
       
    app.route('/Produto/:ProdutoID')
       .get(ProdutoController.Find)
       .put(ProdutoController.Update)
       .delete(ProdutoController.Delete)
}