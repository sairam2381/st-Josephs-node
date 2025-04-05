exports.fetchUserDetails = async (req, res) => {
  try {
  } catch (e) {
    return res.status(404).json({
      success: false,
      message: e,
    });
  }
};
