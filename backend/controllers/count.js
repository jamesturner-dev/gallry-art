const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Counter = require("../models/Counter");

// ! These are convience functions to get the count of various things in the system
// ! I've done similar my entire career but always thought it was hacky.
// ! Especially with NoSQL it works well and is very fast.
// TODO: That being said, lets fix the findby to use the labels.

// ** @desc   Get image count
// ** @route  GET /api/v1/count
// ** @access Public
exports.getImageCount = asyncHandler(async (req, res, next) => {
  // this is a hack to get the count of images
  // add it to the todo list to do it the right way...
  const counter = await Counter.findById("6393612ca827ed704cbd8a89");

  if (!counter) {
    return next(new ErrorResponse("Counter Not Found", 400));
  }

  let { count } = counter;
  count += 1;

  res.status(200).json({
    success: true,
    data: count,
  });
});

// ** @desc   Get user count
// ** @route  GET /api/v1/userCount
// ** @access Public
exports.getUserCount = asyncHandler(async (req, res, next) => {
  const counter = await Counter.findById("6370899a43779d0c6b5dc7d4");

  if (!counter) {
    return next(new ErrorResponse("Counter Not Found", 400));
  }

  let { count } = counter;

  res.status(200).json({
    success: true,
    data: count,
  });
});