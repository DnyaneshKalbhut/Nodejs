const mongoose = require("mongoose");


const userSchema= new mongoose.Schema({
    PRN:{
    type:Number,
    required:true,
    unique:true
    },
    username:{
        type:String,
        required:true,
    },
    rollNo:{
      type:Number
    },
    contact:{
     type:Number,
     length:10,
    },
    img:{
        type:String
    }
})



const User= mongoose.model("User",userSchema);

module.exports=User;