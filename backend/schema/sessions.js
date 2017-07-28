/*
*	@Auther: Greg
*/
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.

var SessionsSchema = new Schema({
 _id: String,
 session: {
	 cookie: {
		 originalMaxAge: Number,
		 expires: String,
		 secure: Boolean,
		 httpOnly: Boolean,
		 path: String
	 },
	 username: String,
	 datetime: Number,
	 expires: Number
 },
 expires: String
 }, { versionKey: false });

//export our module to use in server.js
module.exports = mongoose.model('Session', SessionsSchema);