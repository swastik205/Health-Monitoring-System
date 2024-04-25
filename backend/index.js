const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());
app.use(express.json());

const connection = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully Connected");
  } catch (e) {
    console.log("error");
  }
};

connection();

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/login", require("./routes/auth.js"));
app.use("/user", require("./routes/showDetails.js"));

app.listen(port, () => {
  // console.log(process.env);
  console.log(`Listening on ${process.env.REACT_PORT}`);
});
