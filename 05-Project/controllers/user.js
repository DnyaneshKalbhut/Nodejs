const User = require("../models/user")

async function handleGetallUser(req,res) {
    const dbusers = await User.find({});
    return res.json(dbusers);
}

async function handleAllUserID(req,res) {
    const dbusers = await User.findById(req.params.id);
    return res.json(dbusers);
}
async function handleUpdateUserByID(req,res) {
    await User.findByIdAndUpdate(req.params.id,{lastname:"Changed"})
    return res.json({status : "sucess"})
}

async function handleDeleteUserbyId(req,res) {
    await User.findByIdDelete(req.params.id);
    return res.json({status : "sucess"})
}

async function handleCreateNewUser(req,res) {
    const body = req.body;
    
    const result = await User.create({
      first_name:body.first_name,
      last_name:body.last_name,
      email:body.email,
      job_title:body.job_title,
      gender:body.gender
    },{timeStamp:true})
    console.log(result);
    return res.status(201).json({msg:"sucess",id:result._id});
}




module.exports={handleGetallUser,handleAllUserID,handleUpdateUserByID,handleDeleteUserbyId,handleCreateNewUser}