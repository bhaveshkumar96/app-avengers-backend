const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    email:String,
    password:String
})

const AdminModel = mongoose.model("admin",adminSchema)

module.exports={
    AdminModel
}