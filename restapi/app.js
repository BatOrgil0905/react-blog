require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bp = require("body-parser");

app.use(express.json());

// --Routes--
const authRoute = require("./routes/auth")

app.use(authRoute);

// --Body-Parser--
app.use(bp.urlencoded({extended: false}));
// app.use(bp.json());

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
