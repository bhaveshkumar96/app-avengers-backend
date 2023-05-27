const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    title:String,
    price:Number,
    description:String,
    rating:Number,
    image:String
})

const ProductModel = mongoose.model("product",productSchema)

module.exports = {
    ProductModel
}