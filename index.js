/* express.js */
const express = require("express");
const app     = express();

/* ejs */
app.set("view engine" , "ejs");
app.use(express.static(__dirname + "/files"));


app.get('/', function(req,res){
    res.render('about')
});

app.get('/work', function(req,res){
    res.render('work')
});

app.get('/contact', function(req,res){
    res.render('contact')
});




let port = process.env.PORT;
if(port == "" || port == null){
  port = 5000;
}
app.listen(port, function(){
  console.log("port : " + port);
});