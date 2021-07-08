const express = require("express");

const app =  express();
 
app.get("/LocalTime", function(req , res){
  
    res.send("you can add your html here!");
});