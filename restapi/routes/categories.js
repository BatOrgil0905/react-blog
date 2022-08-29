const express = require("express");
const route = express.Router();

const Category = require("../models/Category");

route.post('/', async (req, res) => {
    const category = new Category(req.body);
    try{
        const savedCategory = await category.save();
        res.status(200).json({
            message: "Шинэ ангилал амжилттай бүртгэгдлээ",
            savedCategory
        })
    }catch(err){
        res.status(500).json(err)
    }
})

route.get("/", async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = route;
