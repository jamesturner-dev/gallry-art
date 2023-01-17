const express = require("express");

const {
  getImages,
  getImage,
  addImage,
  updateImage,
  deleteImage,
  getImageById,
} = require("../controllers/images");

const Image = require("../models/Image");
const advancedResults = require("../middleware/advancedResults");
const router = express.Router({ mergeParams: true });
const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .get(
    advancedResults(Image, {
      path: "gallery",
      select: "name description",
    }),
    getImages
  )
  .post(protect, authorize("publisher", "admin"), addImage);

router
  .route("/:id")
  .get(getImage)
  .put(protect, authorize("publisher", "admin"), updateImage)
  .delete(protect, authorize("publisher", "admin"), deleteImage);


module.exports = router;
