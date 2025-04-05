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
