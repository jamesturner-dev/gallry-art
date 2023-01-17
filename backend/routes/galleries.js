const express = require("express");

const {
  getGalleries,
  getGallery,
  createGallery,
  updateGallery,
  deleteGallery,
  galleryPhotoUpload,
} = require("../controllers/galleries");

const Gallery = require("../models/Gallery");
const imageRouter = require("./images");
const router = express.Router();
const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router.use("/:galleryId/images", imageRouter);

router
  .route("/:id/photo")
  .put(protect, authorize("publisher", "admin"), galleryPhotoUpload);
router
  .route("/")
  .get(advancedResults(Gallery), getGalleries)
  // .get(getGalleries)
  .post(protect, authorize("publisher", "admin"), createGallery);
router
  .route("/:id")
  .get(getGallery)
  .put(protect, authorize("publisher", "admin"), updateGallery)
  .delete(protect, authorize("publisher", "admin"), deleteGallery);

module.exports = router;
