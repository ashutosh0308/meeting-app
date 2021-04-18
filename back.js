var express=require('express')
var app=express();

app.set("view engine","ejs");

app.use("/public",express.static(__dirname + "/public"));

app.use(express.static('public'));

app.get("/",function(req,res){
    res.render("index");
});

app.get("/aboutme",function(req,res){
    res.render("aboutme");
});

app.listen(3000,function(){
    console.log("App is online now....");
});