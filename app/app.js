/**
 * File: style.css
 * Name: Mohammed Ba Bakr
 * Student Id: 301124356
 * Date: 14-02-2021
 */


var port=process.env.PORT || 8080;
var express = require('express');
var session = require('express-session');
var app = express();

//Using Routes and the app login in seperate index.js file
var router=require('./routes/index.js');
app.set('view engine', 'ejs');

//Setting up the session for user login
app.use(session({
	secret: '#123#',
	resave: false,
  	saveUninitialized: true
}));

app.use("/",router);
app.use("/public", express.static(__dirname + '/public'));

app.listen(port);
console.log('Server is up and running at localhost:'+port);

module.exports=app