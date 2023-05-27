const express = require("express")
const { connection } = require("./configs/config")
const app = express()

app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("conected to DB")
    } catch (error) {
    console.log(error)
    }
    console.log(`server running on port ${process.env.PORT}`)
})