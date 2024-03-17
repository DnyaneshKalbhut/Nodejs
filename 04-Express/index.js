const express = require("express");

const app = express();


app.get("/",(req,res)=>{
    res.send("HomePAge");
})


app.get("/about",(req,res)=>{
    res.send("About"+"your name is"+req.query.name);
})


app.listen(4000,()=>{
    console.log("Server started");
})