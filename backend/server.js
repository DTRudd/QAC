/*
*	@Auther: Greg
*	@Description: Created structure of file to respond to client API requests and created fuctions for both get and post methods. 
*				  Implimented intergration with mongodb, with mongoose using Schema's,
*				  Setup of Sessions and Cookies to handle users accounts.
*/

//server.js
'use strict'
//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var bodyParser = require('body-parser');
var Account = require('./schema/accounts');
var Session = require('./schema/sessions');
var forum = require('./schema/forum'),
    Thread = forum.Thread,
    Post = forum.Post;

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
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  //and remove cacheing so we get the most recent changes
  res.setHeader('Cache-Control', 'no-cache');
  next();
});
//now we can set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

router.route('/threads').get(function(req, res) {
  var query;
  var tID;
  if (typeof req.query.threadID !== 'undefined') {
    tID = req.query.threadID;
    query = Thread.find({"_id":tID});
  } else {
    query = Thread.find({});
  }
  query.exec(function(err, threads) {
    res.json(threads);
  });
}).post(function(req, res) {
  var thread = new Thread();
  var postDate = new Date();
  thread._id = req.body.threadID;
  thread.title = req.body.title;
  thread.date = postDate;
  thread.posts = [{}];
  var post = new Post();
  post._id = req.body.postID;
  post.content = req.body.content;
  post.date = postDate;
  thread.posts[0] = post;
  thread.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.json({ message: 'Thread created.'});
  });
});

router.route('/threads/posts').post(function(req, res) {
  var post = new Post();
  var postDate = new Date();
  console.log(req.body);
  post._id = req.body.postID;
  post.date = postDate;
  post.content = req.body.content;
  var threadID = req.body.threadID;
  console.log(threadID);
  Thread.findByIdAndUpdate(
    threadID,
    {$push: {"posts": post}},
    {safe: true, upsert: true},
    function(err) {
      if (err) {
        return res.send(err);
      }
      res.json({ message: 'Posted.'});
    }
  );
});

router.route('/create-account').post(function(req, res) {
	const username = req.body.username;
	const plaintextPass = req.body.password;
	const saltRounds = 10;	
	
	Account.findOne({ username:{ $eq: username } }, (err, accounts) => {
	if (err) res.send(err);//responds with a json object of our database comments.
	    if (accounts !== null) {
				res.json({ error: 'Username already exists.' });
				return;
		}
		
		bcrypt.genSalt(saltRounds, function(err, salt) {
			bcrypt.hash(plaintextPass, salt, function(err, hash) {
			var account = new Account();//body parser lets us use the req.body
				account.username = username;
				account.email = req.body.email;
				account.date = req.body.date;
				account.password = hash;
				
				account.save(function(err) {
					if (err) res.send(err);
					res.json({ message: 'Account successfully created!' });
				});
				
			});
		});
	
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
			} else {
			res.json({ status: "FAIL" });
			}
		});
	})(token, username, dateTime, expire);
	
});


router.route('/logout-session').get((req, res) => {
	const forigenAPIKey = req.query.api;
	const token = req.session.id;
	
	if (localAPIKey !== forigenAPIKey) {
		res.json({
		  error: "API key mismatch, Please try again later."
		});
		return;
	}
	
	const r =((token) => {
		return Session.remove({ _id:{ $eq: token } }, (err, sessions) => {
			if (err) return res.send(err);
			if (sessions !== null) {
				req.session.destroy();
				res.json({ status: "OK" });
				return;
			} else {
			res.json({ status: "FAIL" });
			}
		});
	})(token);
	
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
			} else {
			res.json({ status: "FAIL" });
			}
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
	
	if (!username || !pass) {
		res.json({
		  error: "Missing required parameter."
		});
		return;
	}
	
	const r =((username, pass, dateTime) => {
		return Account.findOne({ username:{ $eq: username } }, { _id: 0, account_id: 1, username: 1, password: 1 }, (err, accounts) => {
			if (err) return res.send(err);
			if (accounts !== null) {
				bcrypt.compare(pass, accounts.password, function(err, match) {
					if(match == true) {
						const twentyFourHours = 86400000;
						const expiration = new Date(parseInt(dateTime) + twentyFourHours);
						res.cookie(`QAC_user-${username}=${req.session.id + dateTime};`, { httpOnly: false, secure: false, maxAge: `${twentyFourHours};`, expires: `${expiration.toGMTString()};`, signed: true });
						req.session.username = username;
						req.session.datetime = parseInt(dateTime);
						req.session.cookie.maxAge = twentyFourHours;
						req.session.expires = parseInt(dateTime) + twentyFourHours;
						req.session.cookie.expires = expiration;
						req.session.save();
						res.json({ sessionId: req.session.id,  session: req.session });
						return;
					} else if(match == false) {
						res.json({ error: 'The username or password is incorrect!' });
						return;
					}
				});
			} else {
				res.json({ error: 'The username or password is incorrect!' });
			}
		});
	})(username, pass, dateTime);
	
});


//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests
app.listen(app.get("port"), () => {
  console.log(`API server running at: http://localhost:${app.get("port")}/`);
});
