const express = require('express');
const router = express.Router();
const memberModel = require('../db/models/member')
const excel = require('./excel.js');
//const tempfile = require('tempfile');

module.exports = router;

router.post('/',(req,res)=>{
    memberModel.find().then((data)=>{
        res.send(data);
    })  
})

router.post('/join',(req,res)=>{
    let user = req.body;
    memberModel.create(user).then(()=>{
        res.send("ok");
    }).catch((err)=>{
        res.send(err.errmsg);
    })
})

router.post('/output/excel',(req,res)=>{
    
    memberModel.find().then((data)=>{
        excel(res,data);
    })
})
