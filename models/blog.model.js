const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title:String,
    description:String
},{versionKey:false})

const BlogModel = mongoose.model("blog",blogSchema)

module.exports={
    BlogModel
}