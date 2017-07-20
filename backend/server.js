//server.js
'use strict'
//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Account = require('./schema/accounts');
var Session = require('./schema/sessions');

var cookieParser = require('cookie-parser');
var eSession = require('express-session');
var MongoStore = require('connect-mongo')(eSession);
//and create our instances
var app = express();
var router = express.Router();
//set our port
app.set("port", process.env.PORT || 8081);
//api key
var localAPIKey = "1928DD301uusu73289GSCJ743lask32367DDSS6Fj5j45dspo534po5t4ruwm3cnbj483989843"
//db config
mongoose.connect('mongodb://qacinemas:Pa$$w0rd@localhost:27017/qacinemas');
var db = mongoose.connection;

app.use(cookieParser('h32kj4SDFSs34a23fDSF3SDhfF3j22hkjhakjh2kjsadasSDFsj3j2j3h42'));
app.use(express.static(__dirname + '/public'));
app.use(eSession({
  name: 'QA_Cinemas',
  secret: 'h32kj4SDFSs34a23fDSF3SDhfF3j22hkjhakjh2kjsadasSDFsj3j2j3h42',
  saveUninitialized: true,
  resave: true,
  cookie:{ httpOnly: false, secure: false },
  store: new MongoStore({ 
			mongooseConnection: db,
			autoRemove: 'interval',
			autoRemoveInterval: 10
			})
}));

//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent changes
 res.setHeader('Cache-Control', 'no-cache');
 next();
});
//now we can set the route path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});


router.route('/accounts').get(function(req, res) {
 //looks at our Schema
Account.find(function(err, accounts) {
	if (err)
		 res.send(err);//responds with a json object of our database comments.
	res.json(accounts)
	});
})//post new account to the database
	.post(function(req, res) {
	var account = new Account();//body parser lets us use the req.body
	account.account_id = req.body.account_id;
	account.username = req.body.username;
	account.email = req.body.email;
	account.password = req.body.password;
	console.log(req.body.account_id);
	account.save(function(err) {
		if (err)
			 res.send(err);
		res.json({ message: 'Account successfully created!' });
	});
});

router.route('/locate-session').get((req, res) => {
	const forigenAPIKey = req.query.api;
	const token = req.session.id
	const username = req.session.username;
	const dateTime = req.session.datetime;
	const expire = req.session.expires;

	if (localAPIKey !== forigenAPIKey) {
		res.json({
		  error: "API key mismatch, Please try again later."
		});
		return;
	}
	
	const r =((token, username, dateTime, expire) => {
		return Session.findOne({ _id:{ $eq: token } }, (err, sessions) => {
			if (err) return res.send(err);
			if (sessions !== null) {
				res.json({ status: "OK", session:{ id: token, uname: username, datetime: dateTime, expires: expire } });
				return;
			}
			res.json({ status: "FAIL" });
		});
	})(token, username, dateTime, expire);
	
});


router.route('/session').get((req, res) => {
	const token = req.query.token;
	const forigenAPIKey = req.query.api;

	if (localAPIKey !== forigenAPIKey) {
		res.json({
		  error: "API key mismatch, Please try again later."
		});
		return;
	}
	
	if (!token) {
		res.json({
		  error: "Missing required parameter."
		});
		return;
	}//_id:{ $eq: token }, 'session.datetime': { $eq: dateTime }, 'session.username': { $eq: username }
	
	const r =((token) => {
		return Session.findOne({ _id:{ $eq: token } }, (err, sessions) => {
			if (err) return res.send(err);
			if (sessions !== null) {
				res.json({ status: "OK" });
				return;
			}
			res.json({ status: "FAIL" });
		});
	})(token);
	
});

router.route('/account').get((req, res) => {
	const username = req.query.un;
	const pass = req.query.p;
	const dateTime = req.query.dt;
	const forigenAPIKey = req.query.api;

	if (localAPIKey !== forigenAPIKey) {
		res.json({
		  error: "API key mismatch, Please try again later."
		});
		return;
	}
	
	if (!username) {
		res.json({
		  error: "Missing required parameter."
		});
		return;
	}
	const r =((username, pass, dateTime) => {
		return Account.findOne({ username:{ $eq: username }, password: { $eq: pass } }, { _id: 0, account_id: 1, username: 1, password: 1 }, (err, accounts) => {
			if (err) return res.send(err);
			if (accounts !== null) {
				const twentyFourHours = 86400000;
				const expiration = new Date(parseInt(dateTime) + twentyFourHours);
				res.cookie(`QAC_user-${username}=${req.session.id + dateTime};`, { httpOnly: false, secure: false, maxAge: `${twentyFourHours};`, expires: `${expiration.toUTCString()};`, signed: true });
				req.session.username = username;
				req.session.datetime = dateTime;
				req.session.cookie.maxAge = twentyFourHours;
				req.session.expires = parseInt(dateTime) + twentyFourHours;
				req.session.cookie.expires = expiration;
				req.session.save();
				res.json({ sessionId: req.session.id,  session: req.session });
				return;
			}
			res.json({ authStatus: "FAIL" });
		});
	})(username, pass, dateTime);
	
});


//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests
app.listen(app.get("port"), () => {
  console.log(`API server running at: http://localhost:${app.get("port")}/`);
});