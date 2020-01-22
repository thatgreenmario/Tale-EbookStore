//function to show cart data
exports.show_Cart = function (req, res) {

  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("cart");
    dbo.collection("cart").find({}).toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
      res.json(result);
    });
  });
};

//function to add to cart 
exports.addto_Cart = function (req, res) {
  /*
    console.log(req);
    res.write('Hello World!');
    res.close();
    
      var MongoClient = require('mongodb').MongoClient;
      var url = "mongodb://localhost:27017/";
  
      MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cart");
    var myobj = { "userid": 89, "isbn": "3434434" };
    dbo.collection("cart").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
     // res.write('Hello World!');
      db.close();
      
    });
  });
  
      var express = require("express");
    var myParser = require("body-parser");
   var app = express();
   
     app.use(myParser.urlencoded({extended : true}));
     app.post("localhost:3000/postcart", function(request, response) {
        console.log(request.body);
       // res.json(request.body.userid);
         //This prints the JSON document received (if it is a JSON document)
   });
   
  const request = require('request');
  
  let url = "http://localhost:3000/postcart";
  
  let options = {json: true};
  
  
  
  request(url, options, (error, res, body) => {
      if (error) {
          return  console.log(error)
      };
  
      if (!error && res.statusCode == 200) {
          // do something with JSON, using the 'body' variable
          console.log(body);
      };
  });
  */
  //console.log(req);

  if (req.method == 'POST') {
    var jsonString = '';

    req.on('data', function (data) {
      jsonString += data;
    });

    req.on('end', function () {

      var abc = JSON.parse(jsonString);
      //console.log(JSON.parse(jsonString));
      console.log(abc.books);

      //********************************

      var MongoClient = require('mongodb').MongoClient;
      var url = "mongodb://localhost:27017/";

      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("cart");
        var myobj = { "_id": abc._id, "userid": abc.userid, "isbn": abc.books };
        dbo.collection("cart").insertOne(myobj, function (err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          // res.write('Hello World!');
          db.close();

        });
      });


      //*********************************
    });



    res.write('Request Successfull');
    res.end();
  }
}

exports.append_Cart = function (req, res) {

  if (req.method == 'PUT') {
    var jsonString = '';

    req.on('data', function (data) {
      jsonString += data;
    });

    req.on('end', function () {

      var abc = JSON.parse(jsonString);
      //console.log(JSON.parse(jsonString));
      console.log(abc.books);

      //********************************************/

      var MongoClient = require('mongodb').MongoClient;
      var url = "mongodb://localhost:27017/";

      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("cart");

        dbo.collection('cart')
          .updateOne(
            { "_id": abc._id }, // Filter
            { $push: { "isbn": abc.books } }, // Update
            { upsert: true } // add document with req.body._id if not exists 

          )

        res.write('Request Successfull');
        res.end();




      });
    });
  }
}
exports.deletefrom_Cart = function (req, res) {

  if (req.method == 'DELETE') {
    var jsonString = '';

    req.on('data', function (data) {
      jsonString += data;
    });

    req.on('end', function () {

      var abc = JSON.parse(jsonString);
      //console.log(JSON.parse(jsonString));
      console.log(abc.books);

      //********************************************/

      var MongoClient = require('mongodb').MongoClient;
      var url = "mongodb://localhost:27017/";

      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("cart");

        dbo.collection('cart')
          .updateOne(
            { "_id": abc._id }, // Filter
            { $pull: { "isbn": abc.books } }, // Update
            { upsert: true } // add document with req.body._id if not exists 

          )

        res.write('Request Successfull');
        res.end();




      });
    });
  }
}
