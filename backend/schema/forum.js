//Sophie


'use strict';


var mongoose = require('mongoose');

var Schema = mongoose.Schema;



//create new instance of the mongoose.schema. the schema takes an
 
//object that shows the shape of your database entries.

var PostSchema = new Schema({

  _id:     Number,

  date:    Date,

  content: String

});



var ThreadSchema = new Schema({

  _id:   Number,

  title: String,

  date:  Date,

  posts:[PostSchema]

});



//export our module to use in server.

module.exports.Thread = mongoose.model('Thread', ThreadSchema);

module.exports.Post = mongoose.model('Post', PostSchema);
