'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.

var Thread = new Schema({
  _id:   Number,
  title: String,
  date:  Date,
  posts:[{
    _id:     String,
    content: String,
    date:    Date
  }]
});

//export our module to use in server.js
module.exports = mongoose.model(Thread, ForumSchema);
