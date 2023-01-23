const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Gallery = require("../models/Gallery");
const path = require("path");

// ** @desc   Get 10 galleries
// ** @route  GET /api/v1/galleries
// ** @access Public

exports.getGalleries = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});


// ** @desc   Get single gallery
// ** @route  GET /api/v1/galleries/:id
// ** @access Public
exports.getGallery = asyncHandler(async (req, res, next) => {
  const gallery = await Gallery.findById(req.params.id);

  if (!gallery) {
    return next(new ErrorResponse("Gallery is required", 400));
  }

  res.status(200).json({
    success: true,
    data: gallery,
  });
});

// ** @desc create gallery
// ** @route  POST /api/v1/galleries/
// ** @access Private
exports.createGallery = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  // const publishedGallery = await Gallery.findOne({ user: req.user.id });

  // if (publishedGallery && req.user.role !== "admin") {
  //   return next(
  //     new ErrorResponse(
  //       `The user with ID ${req.user.id} has already published a gallery`,
  //       400
  //     )
  //   );
  // }

  const gallery = await Gallery.create(req.body);
  res.status(201).json({
    success: true,
    data: gallery,
  });
});

// ** @desc Update gallery
// ** @route  PUT /api/v1/galleries/:id
// ** @access Private
exports.updateGallery = asyncHandler(async (req, res, next) => {
  let gallery = await Gallery.findById(req.params.id);

  if (!gallery) {
    return next(new ErrorResponse("Gallery is required", 400));
  }

  if (gallery.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update this gallery`,
        401
      )
    );
  }

  gallery = await Gallery.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: gallery,
  });
});

// ** @desc Delte gallery
// ** @route DELETE /api/v1/galleries/:id
// ** @access Private
exports.deleteGallery = asyncHandler(async (req, res, next) => {
  const gallery = await Gallery.findById(req.params.id);
  if (!gallery) {
    return res.status(400).json({
      success: false,
    });
  }

  if (gallery.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete this gallery`,
        401
      )
    );
  }

  gallery.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// ** @desc Upload Photo
// ** @route PUT /api/v1/galleries/:id/photo
// ** @access Private
exports.galleryPhotoUpload = asyncHandler(async (req, res, next) => {
  const gallery = await Gallery.findById(req.params.id);

  if (!gallery) {
    return next(new ErrorResponse("Gallery not found", 404));
  }

  if (gallery.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update this gallery`,
        401
      )
    );
  }

  if (!req.files) {
    return next(new ErrorResponse("Upload a file?", 400));
  }

  const file = req.files.file;

  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse("Please upload an image", 400));
  }

  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `image must be less than ${process.env.MAX_FILE_UPLOAD}`,
        400
      )
    );
  }

  file.name = `photo_${gallery._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse("Problem with file upload", 500));
    }

    await Gallery.findByIdAndUpdate(req.params.id, { photo: file.name });

    res.status(200).json({
      success: true,
      data: file.name,
    });
  });
});
