'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentsSchema = new Schema({
	comment_id : {type:Number, required:true}
	commentString : {type:String, required:true}
	}
);

,module.exports = mongoose.model('Comment', commentsSchema);