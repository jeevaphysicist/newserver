const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
                   name:{
                       type:String,
                       required:true
                    },
                    email:{
                        type:String,
                        required:true,
                        unique:true
                     },
                     phone_number:{
                        type:Number
                     }
}) 

const userModel = mongoose.model("userCollection",UserSchema);
module.exports = userModel; 