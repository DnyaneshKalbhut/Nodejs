const express = require("express");
const mongoose = require("mongoose");
const User = require("./modals/user");
require('dotenv').config()

const app = express();

mongoose.connect(process.env.MONGODB_URL);

app.get("/",(req,res)=>{
    const newUser= new User({
        PRN: 123456,
        username: "Dnyanesh",
        rollNo: 123,
        contact: 9876543210,
        img: "profile.jpg"
    })
    
    newUser.save()
    console.log(newUser)
    return res.send(newUser);
})



app.listen(8000,()=>{
    console.log("server is working on 8000 port");
})