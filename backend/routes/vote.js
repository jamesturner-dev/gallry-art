const express = require("express");

const { voteImage } = require("../controllers/vote");

const router = express.Router({ mergeParams: true });

router.route("/").put(voteImage);

module.exports = router;
