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
app.use(bodyParser.urlencoded());
// root route
app.get('/', function(req, res){
	res.render('index');
});

// listen on port 8000
app.listen(8000, function(){
	console.log('Jenny job site on port 8000')
});


