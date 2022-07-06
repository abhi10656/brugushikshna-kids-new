var express = require('express');
var app = express();


// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.use(express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/public'));



// index page
app.get('/', function(req, res) {
  res.render('pages/home');
});
app.get('/shipping', function(req, res) {
  res.render('pages/shipping');
});
app.get('/terms', function(req, res) {
  res.render('pages/terms');
});
app.get('/privacy', function(req, res) {
  res.render('pages/privacy');
});
app.get('/nursery', function(req, res) {
  res.render('innerpages/nursery');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080');