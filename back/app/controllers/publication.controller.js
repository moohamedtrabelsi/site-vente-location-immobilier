const User = require("../models/user.model");
const dbconfig = require("../config/db.config");
const { mongoose } = require("../models");
const Grid = require('gridfs-stream');
const db = require("../models");
const Publication = db.publication
const mongoURI = dbconfig.mongoURI;
const conn = mongoose.createConnection(mongoURI);
let gfs;
conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('photos');
});

exports.addpublication = (req, res) => {
   
    User.findOne({username:req.headers.username
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
 ///  
    gfs.files.find().toArray((err, files) => {
        const skill = new Publication({
            filename: files[files.length - 1].filename,
            contenu: req.body.contenu,
            adresse:req.body.adresse,
            prix:req.body.prix,
            type:req.body.type,
            author:user

        })

        skill.save(err => {
            if (err) {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
            }
            user.publications.push(skill)
            user.save(err=>
                {
                    if (err) {
                        res.status(500).send({ message: err });
                        res.status(500).send("pub  not added to user");

                        return;
                      }
                     

                })
            console.log("pub added");

            res.status(200).send({ message: "pub added" })
        })
    });
///

    });
}

exports.getpubsachat = (req, res) => {
    Publication.find({type:"achat"
    }).exec((err, pubs) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        res.status(200).send(
            pubs
        )
    })

}

exports.getpubslocation = (req, res) => {
    Publication.find({type:"location"
    }).exec((err, pubs) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        res.status(200).send(
            pubs
        )
    })

}



exports.myfav = (req,res)=>
{
    User.findOne({
        username:req.headers.username
    }).populate("favorites","-__v").exec((err,user)=>{
        if (err) {
            res.status(500).send({ message: err });
            return;
          }
          res.status(200).send(user.favorites);
    });
}

exports.mypub = (req,res)=>
{
    User.findOne({
        username:req.headers.username
    }).exec((err,user)=>{
        if (err) {
            res.status(500).send({ message: err });
            return;
          }

          Publication.find({author:user
        }).exec((err, pubs) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
    
            res.status(200).send(
                pubs
            )
        })

    });
}


exports.addtofav = (req,res)=>
{
    User.findOne({
        username:req.headers.username
    }).exec((err,user)=>{
        if (err) {
            res.status(500).send({ message: err });
            return;
          }

          Publication.findOne({_id:req.body.id
        }).exec((err, pub) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
                user.favorites.push(pub)
                user.save(err=>
                    {
                        if (err) {
                            res.status(500).send("pub  not added to user");
    
                            return;
                          }
                         
    
                    })
                console.log("pub added to fav");
    
                res.status(200).send(pub)
        })

    });
}

exports.removefav = (req,res)=>
{
    User.findOne({
        username:req.headers.username
    }).exec((err,user)=>{
        if (err) {
            res.status(500).send({ message: err });
            return;
          }

          Publication.findOne({_id:req.body.id
        }).exec((err, pub) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
                user.favorites.remove(pub)
                user.save(err=>
                    {
                        if (err) {
                            res.status(500).send("pub  not removed from user");
    
                            return;
                          }
                         
    
                    })
                console.log("pub removed from fav");
    
                res.status(200).send(pub)
        })

    });
}

exports.deletepub = (req,res)=>{
    Publication.findById({
        _id:req.body.id
    }).remove((err,offre)=>
    { if(err){
        res.status(400).send("err");
        return;
    }
        res.status(200).send("removed");
      
    })
}