const express = require('express');
const router = express.Router();
const boardModel = require('../db/models/board')

module.exports = router;

router.get('/',(req,res)=>{
    boardModel.find().sort({'num':-1}).limit(10).then( data =>{
        res.send(data)
    })  
})

router.post('/record',(req,res)=>{
    boardModel.create(req.body).then(()=>{
        res.send("ok");
    })
})

router.get('/get/:num',(req,res)=>{
    let num = req.params['num'];
    boardModel.findOne({'num':num}).then((data)=>{
        res.send(data);
    })
})

router.post('/delete/:num',(req,res)=>{
    let num = req.params['num'];
    
    boardModel.deleteOne({'num':num}).then((data)=>{
        res.send("ok");
    })
})