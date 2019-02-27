const express = require('express');
const router = express.Router();
const userModel = require('../db/models/user')

module.exports = router;

router.post('/login',(req,res)=>{
    let email = {"email":req.body.email};
    let user = req.body;

    userModel.findOne(email).then((data)=>{
        if(data === null){
            res.send("not user");
        }else{
            userModel.findOne(user).then((data)=>{
                if(data===null){
                    res.send("not pw");
                }
                if(data.admin===true){
                    res.send("admin");
                }else if(data.admin===false){
                    res.send("user");
                }
            })
        }
    })
})