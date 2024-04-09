

const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
    },
    job_title: {
      type: String,
    },
    gender: {
      type: String,
    },
  });


  const User = mongoose.model("User",userSchema)

  module.exports=User