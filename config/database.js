const mongoose = require("mongoose");
exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Db connection successful");
  } catch (e) {
    console.log(e);
    console.log("Connections is not done properly");
  }
};
