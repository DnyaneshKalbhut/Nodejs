const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();
const mongoose = require("mongoose");
const { type } = require("os");
const { timeStamp } = require("console");

const PORT = 8000;
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("Hello from middle ware");
  req.MyuserName = "Dnyanesh";
  // return res.json({msg:"sucess"})
  next();
});

mongoose.connect("mongodb://localhost:27017/user-DB")
.then(()=> console.log("Db is connected"))
.catch(err=>console.log(err));

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

app.use((req, res, next) => {
  console.log("Hello from middle ware 2", req.MyuserName);
  // return res.json({msg:"success"})
  next();
});

app.use((req, res, next) => {
  fs.appendFile(
    "text.txt",
    `${Date.now()} ${req.method} ${req.path} \n`,
    (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      }
      next(); // Call next() after appending to the file
    }
  );
});

app.get("/users", async (req, res) => {
  const dbusers = await User.find({});
  const html = `
    <ul>
    ${dbusers.map((user) => `<li>${user.first_name} - ${user.email} </li>`).join("")};
    </ul>
    `;
  res.send(html);
});

app.get("/api/users", async(req, res) => {
  const dbusers = await User.find({});

  return res.json(dbusers);
});

//id - dynamic path parameter
app.get("/api/users/:id",async (req, res) => {
  const dbusers = await User.findById(req.params.id);
  return res.json(dbusers);
}).patch(async (req,res)=>{
  await User.findByIdAndUpdate(req.params.id,{lastname:"Changed"})
    return res.json({status : "sucess"})
}).delete(async (req,res)=>{
  await User.findByIdDelete(req.params.id);
  return res.json({status : "sucess"})
})
app.post("/api/users",async (req, res) => {
  const body = req.body;
  
  const result = await User.create({
    first_name:body.first_name,
    last_name:body.last_name,
    email:body.email,
    job_title:body.job_title,
    gender:body.gender
  },{timeStamp:true})
  console.log(result);
  return res.status(201).json({msg:"sucess"});
});
app.patch("/api/users/:id", (req, res) => {
  return res.json({ status: "pending" });
});
app.delete("/api/users/:id", (req, res) => {
  return res.json({ status: "pending" });
});

app.route("/api/users/:id").get().patch().delete();

app.listen(PORT, () => {
  console.log(`server started at PORT: ${PORT}`);
});
