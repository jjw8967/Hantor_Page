const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));

app.get('/',(req,res)=>{
	res.render('index.html');	
})	


app.listen(3000,(err)=>{

	if(err) console.log(err);
	else console.log("Starting Port 3000");

})


