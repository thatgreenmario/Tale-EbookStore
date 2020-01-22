module.exports=function(app){
    var cartController = require('../controllers/cartController');

    app.route('/getcart')
    .get(cartController.show_Cart)
    .post(cartController.addto_Cart)
    .put(cartController.append_Cart)
    .delete(cartController.deletefrom_Cart)
};
