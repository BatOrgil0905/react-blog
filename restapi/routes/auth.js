const express = require("express");
const route = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");

//Register
route.post("/register", async (req, res) => {
  try {
    // --Bcrypting Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const { username, email } = req.body;
    const user = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const saveUser = await user.save();
    res.json({
        message: "Шинэ хэрэглэгч амжилттай үүслээ",
        saveUser
    });
  } catch (err) {
    res.json(err);
  }
});

//Login
route.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.json({
        message: "Хэрэглэгч олдсонгүй!",
      });
    }

    const validate = await bcrypt.compare(password, user.password);
    if (!validate) {
      return res.json({
        message: "Нууц үг буруу байна.",
      });
    }

    res.json({
      message: "Амжилттай нэвтэрлээ.",
      user,
    });
  } catch (err) {
    res.json(err);
  }
});

module.exports = route;
