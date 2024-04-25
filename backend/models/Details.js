const mongoose = require("mongoose");
const { Schema } = mongoose;
const DetailSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  title1: {
    type: String,
    required: true,
  },
  title2: {
    type: String,
  },
  val: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
  },
  desc: {
    type: String,
  },
});

const Details = mongoose.model("info", DetailSchema);
Details.createIndexes;

module.exports = Details;
