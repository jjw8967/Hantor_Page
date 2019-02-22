const express = require('express');
const router = express.Router();
const boardModel = require('../db/models/board')

module.exports = router;

router.get('/',(req,res)=>{
    boardModel.find({}).then( data =>{
        res.send(data)
    })
    
})