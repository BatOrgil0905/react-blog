const express = require("express");
const route = express.Router();

const Post = require("../models/Post");

//Create Post
route.post("/", async (req, res) => {
  const post = new Post(req.body);
  try {
    const savedPost = await post.save();
    res.status(200).json({
      message: "Блог амжилттай орлоо.",
      savedPost,
    });
  } catch (err) {
    res.status(500).json({
      message: "Блог оруулах үед алдаа гарлаа",
      err
    });
  }
});

//Get Single Post
route.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({
      message: "Хүсэлт амжилтгүй боллоо.",
      err,
    });
  }
});

//Get All Posts
route.get("/", async (req, res) => {
  const username = req.query.username;
  const category = req.query.category;

  try {
    let posts;
    if (username) {
      posts = await Post.find({ username: username });
    } else if (category) {
      posts = await Post.find({ categories: { $in: [category] } });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
    console.log(posts);
  } catch (err) {
    res.status(500).json({
      message: "Хүсэлт амжилтгүй боллоо.",
      err,
    });
  }
});

//Update Post
route.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json({
          message: "Блог амжилттай шинэчлэгдлээ.",
          updatedPost,
        });
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("Хүсэлт амжилтгүй боллоо.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete Post
route.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Блог амжилттай устгагдлаа.");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("Хүсэлт амжилтгүй боллоо.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Like & Dislike a Post
route.put("/:id", async (req, res) => {
  try{
    const post = await Post.findById(req.params.id);
    if(!post.likes.includes(req.body.userId)){
      await post.updateOne({$push: {likes: req.body.userId}});
      res.status(200).json("Post has been liked")
    }
    else {
      await post.updateOne({$pull: { likes: req.body.userId}});
      res.status(200).json("Post has been disliked")
    }
  }catch(err){
    res.status(500).json(err)
  }
})

module.exports = route;
