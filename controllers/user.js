const userSchema = require('../models/user');

exports.CreateUser = async (req,res)=>{
        let { name,email,phone_number} = req.body;
        let data = {
                   name:name,
                   email:email,
                   phone_number:phone_number
                  };
    try {
    const createUser = await userSchema.create(data);
    res.status(201).json(createUser);                     
    } catch (error) {
    res.status(500).json({message:error.message,})
    }        
}

exports.UpdateUser = async (req,res)=>{
    let { name,phone_number} = req.body;
    let id = req.params.id;
    let newdata = {
               name:name,
               phone_number:phone_number
              };
    
try {
   const UpdatedUserdata = await userSchema.findByIdAndUpdate({_id:id},newdata,{ new: true });
   if(!UpdatedUserdata) return res.status(404).json({message:"User not Found"});
   res.status(200).json({message:"User Updated Successfully",UpdatedUserdata});
} catch (error) {
   res.status(500).json({message:error.message,})
}        
}

exports.DeleteUser = async (req,res)=>{
    let id = req.params.id;    
try {
   await userSchema.deleteOne({_id:id});
   res.status(200).json({message:"User Deleted Successfully"})
} catch (error) {
   res.status(500).json({message:error.message,})
}        
}

exports.GetAllUsers = async (req,res)=>{
    let id = req.params.id;    
try {
   let users = await userSchema.find({});
   res.status(200).json({message:"Get All User Successfully",data:users})
} catch (error) {
   res.status(500).json({message:error.message,})
}        
}

exports.GetUsersByID = async (req,res)=>{
    let id = req.params.id;    
try {
   let users = await userSchema.findOne({_id:id});
   res.status(200).json({message:"Get All User Successfully",data:users})
} catch (error) {
   res.status(500).json({message:error.message,})
}        
}