require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bp = require("body-parser");
const multer = require("multer");
const path = require("path");

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")))

// --Routes--
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

app.use(authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/categories", categoryRoute);

// --Body-Parser--
app.use(bp.urlencoded({extended: false}));
// app.use(bp.json());

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images")
  }, filename: (req, file, callback) => {
    callback(null, req.body.name)
  }
});

const upload = multer({storage: storage});
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("Файл илгээгдлээ.")
})



mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Server is starting on port 5000");
});
