'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.

var AccountsSchema = new Schema({
 account_id: { type: Number, required: true },
 username: { type: String, required: true, index: { unique: true } },
 email: { type: String, required: true },
 password: { type: String, required: true }
}, { versionKey: false });

//export our module to use in server.js
module.exports = mongoose.model('Account', AccountsSchema);