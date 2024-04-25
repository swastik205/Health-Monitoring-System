const mongoose = require("mongoose");

const mongoURI =
  "mongodb://127.0.0.1:27017/user?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1";

const connectToMongo = () => {
  mongoose.connect(mongoURI);
};

module.export = connectToMongo;
