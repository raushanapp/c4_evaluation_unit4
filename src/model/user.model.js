/*
User Model

firstName ( String, required)
lastName ( String, optional)
email ( String, required)
password ( String, required)
createdAt
updatedAt
*/

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{type: String, required: true },
    lastName:{type: String, required: false},
    email:{type: String, required: true,unique: true},
    password:{type: String, required:true},
},
{
    timestamps:true,
    versionKey:false,
});


module.exports = mongoose.model("user",userSchema);