const express = require("express");
const route = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");
const Post = require("../models/Post");

//Get Single User
route.get("/user/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    res.json(user);
  } catch (err) {
    res.json({
      message: "Хүсэлт амжилтгүй боллоо.",
      err,
    });
  }
});

//Update
route.put("/update-user/:id", async (req, res) => {
  const userId = req.body.userId;
  if (userId === req.params.id) {
    const hashedPassword = req.body.password;
    if (hashedPassword) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(hashedPassword, salt);
    }

    try {
      const updateUser = await User.findByIdAndUpdate(userId, {
        $set: req.body,
      });
      res.json({
        message: "Хэрэглэгч амжилттай шинэчлэгдлээ.",
        updateUser,
      });
    } catch (err) {
      res.json(err);
    }
  } else {
    res.json({
      message: "Хүсэлт амжилтгүй боллоо.",
    });
  }
});

//Delete
route.delete("/delete-user/:id", async (req, res) => {
  const userId = req.body.userId;
  if (userId === req.params.id) {
    try {
      const user = await User.findById(userId);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(userId);
        res.json({
          message: "Хэрэглэгч амжилттай устгагдлаа.",
        });
      } catch (err) {
        res.json(err);
      }
    } catch (err) {
      res.json({
        message: "Хэрэглэгч олдсонгүй.",
        err,
      });
    }
  } else {
    res.json({
      message: "Хүсэлт амжилтгүй боллоо.",
    });
  }
});

module.exports = route;
