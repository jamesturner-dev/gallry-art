const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Image = require("../models/Image");
const Gallery = require("../models/Gallery");
const getCount = require("../utils/getCount");

// ** @desc   Get all images
// ** @route  GET /api/v1/images
// ** @route  GET /api/v1/directories/:imageId/images
// ** @access Public
exports.getImages = asyncHandler(async (req, res, next) => {
  if (req.params.imageId) {
    const images = await Image.find({ gallery: req.params.imageId });
    return res.status(200).json({
      success: true,
      count: images.length,
      data: images,
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

// ** @desc   Get single image by Id
// ** @route  GET /api/v1/images/byId/:id
// ** @access Public
exports.getImage = asyncHandler(async (req, res, next) => {
  const image = await Image.findById( req.params.id );

  if (!image) {
    return next(
      new ErrorResponse(`Image not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: image,
  });
});

// ** @desc   Create new image
// ** @route  POST /api/v1/directories/:GalleryId/images
// ** @access Private

exports.addImage = asyncHandler(async (req, res, next) => {

  // This is such a hack.  I need to find a better way to do this.
  // but one way or another you are creating a counter w/ mongoose / mongo
  // "images" here denotes the counter we are accessing as opposed to user, etc.
  const count = await getCount("image");

  if (!count) {
    return next(new ErrorResponse("Could not retrieve previous count", 404));
  }

  req.body.gallery = req.params.galleryId;
  req.body.user = req.user.id;
  req.body.rating = Math.floor(Math.random() * 10);
  req.body.clicks = 1;

  const gallery = await Gallery.findById(req.params.galleryId);

  if (!gallery) {
    return next(
      new ErrorResponse(
        `Gallery not found with id of ${req.params.galleryId}`,
        404
      )
    );
  }

  if (gallery.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to add an image to  ${gallery._id}`,
        401
      )
    );
  }

  const image = await Image.create(req.body);

  if (!image) {
    return next(
      new ErrorResponse(
        `Could not create image`,
        404
      )
    );
  }

  res.status(201).json({
    success: true,
    newCount: count,
    data: image,
  });
});

// ** @desc   Update image
// ** @route  PUT /api/v1/images/:id
// ** @access Private

exports.updateImage = asyncHandler(async (req, res, next) => {
  let image = await Image.findById(req.params.id);

  if (!image) {
    return next(
      new ErrorResponse(`Image not found with id of ${req.params.id}`, 404)
    );
  }

  if (image.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update image ${image._id}`,
        401
      )
    );
  }

  image = await Image.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    success: true,
    data: image,
  });
});

// ** @desc   delete image
// ** @route  DELETE /api/v1/images/:id
// ** @access Private

exports.deleteImage = asyncHandler(async (req, res, next) => {
  const image = await Image.findById(req.params.id);

  if (!image) {
    return next(
      new ErrorResponse(`Image not found with id of ${req.params.id}`, 404)
    );
  }

  if (image.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delet image ${image._id}`,
        401
      )
    );
  }

  await image.remove();

  res.status(201).json({
    success: true,
    data: {},
  });
});
