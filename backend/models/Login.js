const mongoose = require("mongoose");
const { Schema } = mongoose;
const LoginSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Login = mongoose.model("login", LoginSchema);
Login.createIndexes;

module.exports = Login;
