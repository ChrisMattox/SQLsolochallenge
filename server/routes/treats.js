var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/sigma';

router.get('/', function(req, res) {

  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }

    client.query('SELECT * FROM treats', function(err, result) {
      done();
      if(err) {
        console.log('select query error: ', err);
        res.sendStatus(500);
      }
      res.send(result.rows);
    });
  });
});

router.post('/', function(req, res) {
  var newTreat = req.body;
  console.log("this is your tasty ", newTreat);
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }
    client.query(
      'INSERT INTO treats (name, description, pic) ' +
      'VALUES ($1, $2, $3)',
      [newTreat.name, newTreat.description, newTreat.url],
      function(err, result) {
        done();
        if(err) {
          console.log('insert query error: ', err);
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        }
      });
  });
});


module.exports = router;
