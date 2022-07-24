const express = require("express");
const route = express.Router();

const Post = require("../models/Post");

//Create Post
route.post("/add-post", async (req, res) => {
  const post = new Post(req.body);
  try {
    const savedPost = await post.save();
    res.json({
      message: "Блог амжилттай орлоо.",
      savedPost,
    });
  } catch (err) {
    res.json(err);
  }
});

//Get Single Post
route.get("/post/:id", async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await Post.findById(postId);
    res.json(post);
  } catch (err) {
    res.json({
      message: "Хүсэлт амжилтгүй боллоо.",
      err,
    });
  }
});

//Get All Posts
route.get("/posts/", async (req, res) => {
  const username = req.query.username;
  const category = req.query.category;

  try {
    let posts;
    if (username) {
      posts = await Post.find({ username: username });
    } else if (category) {
      posts = await Post.find({ category: { $in: [category] } });
    } else {
      posts = await Post.find();
    }
    res.json(posts);
  } catch (err) {
    res.json({
      message: "Хүсэлт амжилтгүй боллоо.",
      err,
    });
  }
});

//Update Post
route.put("/update-post/:id", async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await Post.findById(postId);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          postId,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.json({
          message: "Блог амжилттай шинэчлэгдлээ.",
          updatedPost,
        });
      } catch (err) {
        res.json(err);
      }
    } else {
      res.json("Хүсэлт амжилтгүй боллоо.");
    }
  } catch (err) {
    res.json(err);
  }
});

//Delete Post
route.delete("/delete-post/:id", async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await Post.findById(postId);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.json("Блог амжилттай устгагдлаа.");
      } catch (err) {
        res.json(err);
      }
    } else {
      res.json("Хүсэлт амжилтгүй боллоо.");
    }
  } catch (err) {
    res.json(err);
  }
});

module.exports = route;
