const express = require("express")
const { connection } = require("./configs/config")
const { userRouter } = require("./routes/user.route")
const { blogRouter } = require("./routes/blog.route")
require("dotenv").config()
const app = express()
app.use(express.json())
app.use("/users",userRouter)
app.use("/blogs",blogRouter)

app.get("/",(req,res)=>{
res.send("this is home page")
})
app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("conected to DB")
    } catch (error) {
    console.log(error)
    }
    console.log(`server running on port ${process.env.PORT}`)
})