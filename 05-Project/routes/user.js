const express = require("express")
const {handleGetallUser,handleCreateNewUser,handleAllUserID,handleUpdateUserByID,handleDeleteUserbyId} = require("../controllers/user")
const User = require("../models/user")

const router = express.Router()

  router.route("/").get(handleGetallUser).post(handleCreateNewUser)
   
  //id - dynamic path parameter
  router.route(":id").get(handleAllUserID)
  .patch(handleUpdateUserByID)
  .delete(handleDeleteUserbyId)



  module.exports= router