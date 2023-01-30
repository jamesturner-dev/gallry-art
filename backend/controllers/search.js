const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Image = require("../models/Image");

// ** @desc   Search all images
// ** @route  POST /api/v1/search
// ** @access Public
exports.searchImages = asyncHandler(async (req, res, next) => {
  var { searchTerm } = req.body;

  if (searchTerm) {

    const stopWords = [
      'and', 'or', 'this', 'fuck', 'the', "if", "find", "that",
      "then", "else", "when", "where", "how", "all", "any", "both",
      "each", "few", "more", "most", "other", "some", "such", "no",
    ];

    searchTerm = searchTerm.replace(new RegExp('\\b('+stopWords.join('|')+')\\b', 'g'), '');

    console.log(searchTerm);

    const images = [];

    Image.find({ $text: { $search: searchTerm } }).limit(10).exec(function (err, results) {
      return res.status(200).json({
        success: true,
        count: results.length,
        data: results,
      });

    });
  } else {
    return next(new ErrorResponse(`Please add a search term`, 400));
  }
});
