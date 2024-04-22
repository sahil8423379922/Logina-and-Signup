const express = require('express')

const app =express()

app.use(function(req, res, next) {   
res.header("Access-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});


app.post('/auth',(req,res)=>{
  console.log("Called by Frontend")
})




app.listen(4000, (res) => {
  console.log('Listening on port 4000')
});
