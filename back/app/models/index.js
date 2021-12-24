const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.like = require("./like.model");
db.comment = require("./comment.model")
db.publication = require("./publication.model");


module.exports = db;