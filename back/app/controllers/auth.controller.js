const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });
  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

      res.send({ message: "User was registered successfully!" });

  });
};

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(200).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(200).send({ message: "User Not found." });

      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

    res.status(200).send({
        
        username: user.username,
        firstname:user.firstname,
        lastname:user.lastname,
        email: user.email,
        password: user.password,

       // user: user ,
        
      });
    });
};

exports.getUser = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      res.status(200).send({
        
        username: user.username,
        firstname:user.firstname,
        lastname:user.lastname,
        email: user.email,
        password: user.password,
      
      });
    });
};


exports.updateUser = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: "bbb" });
        return;
      }
      user.email=req.body.email,
      user.firstname=req.body.firstname,
      user.lastname=req.body.lastname,
      user.password =bcrypt.hashSync(req.body.password, 8)
      user.save(err => {
        if (err) {
          res.status(500).send({ message: "done" });
          return;
        }

        res.status(200).send({
        
        
          username: user.username,
          firstname:user.firstname,
          lastname:user.lastname,
          email: user.email,
          password: user.password,
          
        });      });
 
    });


};



