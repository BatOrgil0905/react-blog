const express = require("express");
const route = express.Router();

const Category = require("../models/Category");

route.post('/add-category', async (req, res) => {
    const category = new Category(req.body);
    try{
        const savedCategory = await category.save();
        res.json({
            message: "Шинэ ангилал амжилттай бүртгэгдлээ",
            savedCategory
        })
    }catch(err){
        res.json(err)
    }
})

route.get("/categories", async (req, res) => {
  try {
    const category = await Category.find();
    res.json(category);
  } catch (err) {
    res.json(err);
  }
});

module.exports = route;
