const mongoose = require("mongoose");


const Publication = mongoose.model(
"Publication",
new mongoose.Schema({
    contenu:String,
    type:String,
    prix:String,
    adresse:String,
    filename :String,
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})
);
module.exports = Publication;