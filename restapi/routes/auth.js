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

    // --Creating a new user--
    const { username, email } = req.body;
    const user = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    // --Saving a user and return response--
    const saveUser = await user.save();
    res.status(200).json({
        message: "Шинэ хэрэглэгч амжилттай үүслээ",
        saveUser
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//Login
route.post("/login", async (req, res) => {
  try {

    // --Checking username--
    const { username } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(400).json({
        message: "Хэрэглэгч олдсонгүй!",
      });
    }

    // --Checking password--
    const validate = await bcrypt.compare(req.body.password, user.password);
    if (!validate) {
      return res.status(400).json({
        message: "Нууц үг буруу байна.",
      });
    }

    //Password хэсгийг хасаж байна.
    const {password, ...others} = user._doc;

    res.status(200).json({
      message: "Амжилттай нэвтэрлээ.",
      others,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = route;
