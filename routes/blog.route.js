const express = require("express");
const { BlogModel } = require("../models/blog.model");
const blogRouter = express.Router();

blogRouter.get("/", async (req, res) => {
  let blogs = await BlogModel.find();
  res.send(blogs);
});

blogRouter.post("/postblog", async (req, res) => {
  try {
    let blog = new BlogModel(req.body);
    await blog.save();
    res.status(200).send(blog);
  } catch (error) {
    res.send(error);
  }
});

module.exports = {
  blogRouter,
};
