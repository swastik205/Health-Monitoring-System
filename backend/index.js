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
  } catch (error) {
    console.log({ error });
  }
};

connection();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/login", require("./routes/auth.js"));
app.use("/user", require("./routes/showDetails.js"));

app.listen(process.env.REACT_PORT, () => {
  console.log(`Listening on ${process.env.REACT_PORT}`);
});
