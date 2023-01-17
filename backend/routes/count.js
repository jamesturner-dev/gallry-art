const express = require("express");
const { getImageCount, getUserCount } = require("../controllers/count");
const router = express.Router();

// the default route gets the overall link count
router.route("/").get(getImageCount);

router.route("/users").get(getUserCount);

module.exports = router;
