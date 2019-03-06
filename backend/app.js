const express = require('express')
const bodyParser = require('body-parser')

const board = require('./routers/board')
const user = require('./routers/user')
const member = require('./routers/member')

require('./db/mongo') //connect db

const app = express()

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type")
    next()
})

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use('/board',board)
app.use('/user',user)
app.use('/member',member)

app.listen(8000,(err)=>{

	if(err) console.log(err);
	else console.log("Starting Port 3000");

})


