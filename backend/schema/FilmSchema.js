'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Film_AllSchema = new Schema({
	id : Number,
	film_name : String,
	release_date : String,
	age_rating : String,
	img : String,
	quote : String,
	film_description : String,
	trailer : String,
	comments : []
});

//export our module to use in server.js
module.exports = mongoose.model('Films_All', Film_AllSchema);