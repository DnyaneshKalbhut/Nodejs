const express = require("express")
const urlRoutes = require("./routes/url")
const {connectToMongoDB} = require("./connection")
const URL  = require("./models/url")

const app = express();

connectToMongoDB("mongodb://localhost:27017/short_URL").then(()=> console.log("Connected DB"))
const PORT = 8000


app.use("/:shortid", async function (req, res) {
    const shortId = req.params.shortid;

    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );

     res.redirect(entry.redirectURL);
});



app.use(express.json())
app.use("/url",urlRoutes);
app.listen(PORT,()=>{
    console.log(`Server started at port : ${PORT}` )
})