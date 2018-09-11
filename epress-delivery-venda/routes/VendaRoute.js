'use strict'
module.exports = function(app) {
    var VendaController = require('../controllers/VendaController');
    
    app.route('/Venda')
       .get(VendaController.Select)
       .post(VendaController.Insert)
       
    app.route('/Venda/:VendaID')
       .get(VendaController.Find)
       .put(VendaController.Update)
       .delete(VendaController.Delete)
}