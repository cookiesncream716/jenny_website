// require node modules
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
// create app
var app = express();
// static content
app.use(express.static(path.join(__dirname, "./static")));
// view engine and view folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
// use body-parser
// app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({extended: true}));
// root route
app.get('/', function(req, res){
	res.render('index');
});
// contact route
app.post('/contact', function(req, res){
	console.log('name=' + req.body.name + ' email=' + req.body.email + ' phone=' + req.body.phone + ' message=' + req.body.message);
	res.render('success')
})

// listen on port 8000
app.listen(8000, function(){
	console.log('Jenny job site on port 8000')
});


