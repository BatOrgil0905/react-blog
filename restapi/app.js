require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bp = require("body-parser");
const multer = require("multer");

app.use(express.json());

// --Routes--
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories")

app.use(authRoute);
app.use(userRoute);
app.use(postRoute);
app.use(categoryRoute);

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
  res.json("Файл илгээгдлээ.")
})

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen(3001, () => {
  console.log("Server is starting on port 3001");
});
