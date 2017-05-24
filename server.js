// require node modules
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
// create app
var app = express();
// set env variables
// require('dotenv').config();
// console.log(USER + PASSWORD)
// static content
app.use(express.static(path.join(__dirname, "./static")));
// view engine and view folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
// use body-parser
// app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({extended: true}));
// mailer
var transporter = nodemailer.createTransport({
	host: 'smtp.ladle.net',
	auth: {
		user: '',
		pass: ''
	},
	port: 587,
	tls: {
		rejectUnauthorized: false
	}
});
// verify connection configuration
// transporter.verify(function(error, success) {
//    if (error) {
//         console.log(error);
//    } else {
//         console.log('Server is ready to take our messages');
//    }
// });
// root route
app.get('/', function(req, res){
	res.render('index');
});
// contact route
app.post('/contact', function(req, res){
	console.log('name=' + req.body.name + ' email=' + req.body.email + ' phone=' + req.body.phone + ' message=' + req.body.message);
	transporter.sendMail({
		from: req.body.email,
		to: 'heather@ladle.net',
		subject: 'Message from ' + req.body.name + ' for Walker Services',
		text:req.body.message + 'My phone number is ' + req.body.phone
	});
	res.render('success')
})

// listen on port 8000
app.listen(8000, function(){
	console.log('Jenny job site on port 8000')
});


