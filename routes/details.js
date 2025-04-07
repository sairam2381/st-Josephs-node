const express = require("express");
const {
  fetchUserDetails,
  fetchUserName,
  putUserName,
} = require("../controllers/detailsFunction");
const router = express.Router();
router.get("/getUser", fetchUserDetails);
router.get("/getName", fetchUserName);
router.post("/addData", putUserName);
module.exports = router;
