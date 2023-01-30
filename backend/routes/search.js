const express = require("express");

const { searchImages } = require("../controllers/search");

const router = express.Router({ mergeParams: true });

router.route("/").post(searchImages);

module.exports = router;
