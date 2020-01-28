//function to show wishlist data
exports.show_Wishlist = function (req, res) {

    var MongoClient = require('mongodb').MongoClient;
    //var url = "mongodb://localhost:27017/";
    var url = "mongodb+srv://root:root1234@ebookcart-wbdt2.mongodb.net/test?retryWrites=true&w=majority";
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("wishlist");
      dbo.collection("wishlist").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
        res.json(result);
      });
    });
  };