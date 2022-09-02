const express = require("express");
const route = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");
const Post = require("../models/Post");

//Get Single User
route.get("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    const {password, ...others} = user._doc;
    res.status(200).json({
      message: "Хүсэлт амжилттай боллоо.",
      others
    });
  } catch (err) {
    res.status(500).json({
      message: "Хүсэлт амжилтгүй боллоо.",
      err,
    });
  }
});

//Update
route.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
      const updateUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      },
      {new: true });
      res.status(200).json({
        message: "Хэрэглэгч амжилттай шинэчлэгдлээ.",
        updateUser,
      });
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(401).json({
      message: "Хүсэлт амжилтгүй боллоо.",
    });
  }
});

//Delete
route.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
          message: "Хэрэглэгч амжилттай устгагдлаа.",
        });
      } catch (err) {
        res.status(400).json(err);
      }
    } catch (err) {
      res.status(404).json({
        message: "Хэрэглэгч олдсонгүй.",
        err,
      });
    }
  } else {
    res.status(401).json({
      message: "Хүсэлт амжилтгүй боллоо.",
    });
  }
});

//Follow a User
route.put("/:id/follow", async (req, res) => {
  if(req.body.userId !== req.params.id){
    try{
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if(!user.followers.includes(req.body.userId)){
        await user.updateOne({$push:{ followers: req.body.userId }});
        await currentUser.updateOne({$push:{ followings: req.body.id }});
        res.status(200).json("Та хэрэглэгчийг дагалаа!")
      }else{
        res.status(403).json("Та энэ хэрэглэгчийг аль хэдийн дагасан байна.")
      }
    }catch(err){
      res.status(500).json(err)
    }
  }else {
    res.status(403).json("Та өөрийгөө дагаж болохгүй!")
  }
})

// Unfollow a user
route.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.body.id } });
        res.status(200).json("Та хэрэглэгчийг дагахаа болилоо!");
      } else {
        res.status(403).json("Та энэ хэрэглэгчийг аль хэдийн дагахаа болисон байна.");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Та өөрийгөө дагаж болохгүй!");
  }
});

module.exports = route;
