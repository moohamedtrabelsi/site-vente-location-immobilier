const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,


    publications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Publication"
      }
    ],
    favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Publication"
      }
    ]
  })
);

module.exports = User;
