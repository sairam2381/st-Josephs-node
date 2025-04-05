const express = require("express");
const {
  fetchUserDetails,
  fetchUserName,
} = require("../controllers/detailsFunction");
const router = express.Router();
router.get("/getUser", fetchUserDetails);
router.get("/getName", fetchUserName);
module.exports = router;
