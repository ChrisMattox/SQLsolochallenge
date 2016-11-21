var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;
var bodyParser = require( 'body-parser' );
var treats = require('./routes/treats');

/*** Build out a module to manage our treats requests. ***/
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/treats', treats);

app.get('/', function(req, res) {
  res.sendFile(path.resolve('./server/public/views/index.html'));
});

app.use(express.static('./server/public'));

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), function () {
  console.log('Listening on port: ', app.get('port'));
});
