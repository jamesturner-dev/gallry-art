const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Image = require("../models/Image");

// ** @desc   Vote on images
// ** @route  PUT /api/v1/vote
// ** @access Public
exports.voteImage = asyncHandler(async (req, res, next) => {
	const { vote, id } = req.body;

	if (vote === true || (vote === false && id)) {
		if (vote === true) {
			Image.findOneAndUpdate(
				{ _id: id },
				{ $inc: { clicks: 1 } },
				{ new: true },
				function (err, response) {
					if (err) {
						res.status(400).json({
							success: false,
							data: { err },
						});
					} else {
						res.status(200).json({
							success: true,
							data: { response },
						});
					}
				}
			);
		} else if (vote === false) {
			Image.findOneAndUpdate(
				{ _id: id },
				{ $inc: { clicks: -1 } },
				{ new: true },
				function (err, response) {
					if (err) {
						res.status(400).json({
							success: false,
							data: { err },
						});
					} else {
						res.status(200).json({
							success: true,
							data: { response },
						});
					}
				}
			);
		} else {
			return next(new ErrorResponse("Vote must be true or false", 400));
		}
	} else {
		return next(new ErrorResponse("Vote is required", 400));
	}
});
