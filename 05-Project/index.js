const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./middlewares");

const PORT = 8000;
app.use(express.urlencoded({ extended: false }));

connectMongoDb("mongodb://localhost:27017/user-DB").then(()=>console.log("Db connection is successfull")).catch(err=>console.log(err))

app.use(logReqRes("log.txt"));

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`server started at PORT: ${PORT}`);
});
