'use strict'
module.exports = function(app) {
    var ClienteController = require('../controllers/ClienteController');
    
    app.route('/Cliente')
       .get(ClienteController.Select)
       .post(ClienteController.Insert)
       
    app.route('/Cliente/:ClienteID')
       .get(ClienteController.Find)
       .put(ClienteController.Update)
       .delete(ClienteController.Delete)
}