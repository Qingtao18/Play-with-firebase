import React, { Component } from 'react';
var express       = require("express"),
	app           = express(),
	bodyParser    = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")
app.get("/", function(req,res){
   res.render("landing");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The sever has started") 
});