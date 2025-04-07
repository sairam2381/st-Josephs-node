const mongoose = require("mongoose");
const User = new mongoose.Schema({
  name: {
    // type: Number,
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
  },
  address: {
    type: String,
  },
  age: {
    type: String,
  },
});
module.exports = mongoose.model("User", User);
