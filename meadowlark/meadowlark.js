var express = require('express');
var app = express();
var handlebars = require('express3-handlebars').create({ defaultLayout:'main' });
var fortune = require('./lib/fortune.js');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT||3000);

app.get('/', function(req,res){
	res.render('home');
});

app.get('/about', function(req, res){
	res.render('about',{fortune: fortune.getFortune()});
});

app.get('404', function(req,res){
	res.status(404);
	res.render('404 - Not found');
});

app.get('500', function(err, req, res, next){
	res.status(500);
	res.render('500 - Server Error');
	console.error(err.stack);
});

app.listen(app.get('port'), function(){
	console.log("started on http://localhost:" + app.get('port'));
});