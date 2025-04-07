const User = require("../models/user");
exports.fetchUserDetails = async (req, res) => {
  try {
    const getDetails = await User.find({});
    return res.status(200).json({
      success: true,
      data123: getDetails,
    });
  } catch (e) {
    return res.status(404).json({
      success: false,
      //   message: e,
    });
  }
};

exports.fetchUserName = async (req, res) => {
  try {
    const getDetails = await User.find({}, { name: 1 });
    return res.status(200).json({
      success: true,
      data123: getDetails,
    });
  } catch (e) {
    return res.status(404).json({
      success: false,
      //   message: e,
    });
  }
};
exports.putUserName = async (req, res) => {
  try {
    const { name, email, mobile, address } = req.body;
    console.log("data", req.body);

    if (!name || !email || !mobile || !address) {
      return res.status(400).json({
        success: false,
        messgae: "Details not filled",
      });
    }
    const findEmail = await User.findOne({ email });
    if (findEmail) {
      return res.status(404).json({
        success: false,
        message: "Email is already existing",
      });
    }
    await User.create({
      name,
      email,
      mobile,
      address,
    });
    return res.status(200).json({
      success: true,
      message: "Process is successful",
    });
  } catch (e) {
    console.log("The issue:", e);

    return res.status(404).json({
      success: false,
      //   message: e,
    });
  }
};
