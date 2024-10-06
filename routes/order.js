const express = require('express');
const router = express.Router();

router.get("/getmethod",(req,res)=>{
        res.send("send message from order");
})



module.exports = router;