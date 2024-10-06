const express = require('express');
const router = express.Router();
const UserContollers = require('../controllers/user');

router.get("/getmethod",(req,res)=>{
        res.send("send message");
})

router.post("/create",UserContollers.CreateUser);
router.patch("/update/:id",UserContollers.UpdateUser);
router.delete("/delete/:id",UserContollers.DeleteUser);
router.get("/get-all-users",UserContollers.GetAllUsers);
router.get("/getuser/:id",UserContollers.GetUsersByID);


module.exports = router;