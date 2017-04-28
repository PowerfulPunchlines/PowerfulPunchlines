var express = require('express');
// var knex = require('knex');
var path = require('path');
var bodyParser = require('body-parser');

var db = require('./db/database.js');
var app = express();

app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../client')));

app.get('/profile', function (req, res) {
  var query = 'SELECT tripName FROM trips INNER JOIN user_trips ON trips.id = user_trips.trip_id WHERE user_id = 3';
  db.dbConnection.query(query, (error, results, field) => {
    res.send(results)
  })
})

// work on this later..
// app.post('/login', function (req, res){
//   console.log("log in username", req.body.username);
//   var userName = req.body.username;
//   var password = req.body.password;
//   res.send(req.body.username)
// })

app.post('/signup', function (req, res){

  var userName = req.body.username;
  var passWord = req.body.password;

  var query = `INSERT INTO users(username, password) VALUES ('${userName}', '${passWord}')`;
  db.dbConnection.query(query);

  res.send(req.body.username)
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
