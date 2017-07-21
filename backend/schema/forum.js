'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.

var ForumSchema = new Schema({
  threads: [{
    _id:   Number,
    title: String,
    date:  Date,
    posts:[{
      _id:     Number,
      content: String,
      date:    Date
    }]
  }]
});

//export our module to use in server.js
module.exports = mongoose.model('Forum', ForumSchema);