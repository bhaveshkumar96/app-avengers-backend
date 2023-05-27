const mongoose = require("mongoose")
require("dotenv").config()
const connection = mongoose.connect(process.env.MY_MONGODB)

module.exports={
    connection
}

