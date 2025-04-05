const express = require("express");
const { fetchUserDetails } = require("../controllers/detailsFunction");
const router = express.Router();
router.get("/getUser", fetchUserDetails);
module.exports = router;
