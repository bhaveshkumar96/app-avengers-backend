const express = require("express");
const { BlogModel } = require("../models/blog.model");
const blogRouter = express.Router();

blogRouter.get("/", async (req, res) => {
  let blogs = await BlogModel.find();
  res.send(blogs);
});

blogRouter.post("/createblog", async (req, res) => {
  try {
    let blog = new BlogModel(req.body);
    await blog.save();
    res.status(200).send(blog);
  } catch (error) {
    res.send(error);
  }
});
blogRouter.patch("/updateblog/:id",async(req,res)=>{
  let {id} = req.params
  try {
    await BlogModel.findByIdAndUpdate({_id:id},req.body)
    res.send("post updated")
  } catch (error) {
    res.status(404).send(error.message)
  }
})
blogRouter.delete("/deleteblog/:id",async(req,res)=>{
  let {id} = req.params
  try {
    await BlogModel.findByIdAndDelete({_id:id})
    res.send("post deleted")
  } catch (error) {
    res.status(404).send(error)
  }
})
module.exports = {
  blogRouter,
};
