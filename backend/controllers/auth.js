const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const getCount = require("../utils/getCount");
const sendEmail = require("../utils/sendEmail");
const User = require("../models/User");

// ** @desc   Register user
// ** @route  POST /api/v1/auth/register
// ** @access Public
exports.register = asyncHandler(async (req, res, next) => {

  const { name, email, password, role } = req.body;
  if (!name || !email || !password) {
    return next(new ErrorResponse("Please provide all required fields", 400));
  }

  const user = await User.create({ name, email, password, role });
  if (!user) {
    return next(new ErrorResponse("Registration Failed", 401));
  }
  
  const count = await getCount("user");
  if (!count) {
    return next(new ErrorResponse("Could not retrieve previous user count", 404));
  }
  console.log("Count: " + count);

  sendTokenResponse(user, 200, res);
  
});

// ** @desc   user login
// ** @route  POST /api/v1/auth/login
// ** @access Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Provide email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  sendTokenResponse(user, 200, res);
});

// ** @desc   Logout user / clear cookie
// ** @route  GET /api/v1/auth/logout
// ** @access Private
exports.logout = asyncHandler(async (req, res, next) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    data: {},
  });
});

// ** @desc   Get user
// ** @route  POST /api/v1/auth/me
// ** @access Private

exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

// ** @desc   Update user details
// ** @route  PUT /api/v1/auth/updateDetails
// ** @access Private

exports.updateDetails = asyncHandler(async (req, res, next) => {
  // can't update password here - that's a separate route
  // can't update role of course... that's an admin thing
  const fieldsToUpdate = {
    name: req.body.name,
    email: req.body.email,
  };

  const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});

// ** @desc   Update password
// ** @route  PUT /api/v1/auth/updatePassword
// ** @access Private

exports.updatePassword = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  // Check current password
  if (!(await user.matchPassword(req.body.currentPassword))) {
    return next(new ErrorResponse("Password is incorrect", 401));
  }

  user.password = req.body.newPassword;
  await user.save();

  sendTokenResponse(user, 200, res);
});

// ** @desc   Forgot Password
// ** @route  POST /api/v1/auth/forgotpassword
// ** @access Public

exports.forgotPassword = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorResponse("No user with that email", 404));
  }

  // Get reset token from method in user model
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  // Create reset url
  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/auth/resetpassword/${resetToken}`;

  const message = `You are receiving this email because you
   (or someone else) has requested the reset of a password. 
   Please make a PUT request to: \n \n ${resetUrl}`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Password Reset",
      message,
    });
    res.status(200).json({ success: true, data: "Email sent" });
  } catch (err) {
    console.log(err);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new ErrorResponse("Email could not be sent", 500));
  }
});

// ** @desc   Reset Password
// ** @route  PUT /api/v1/auth/resetpassword/:resettoken
// ** @access Public

exports.resetPassword = asyncHandler(async (req, res, next) => {
  // Get hashed token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resettoken)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(new ErrorResponse("Invalid token", 400));
  }

  // Set new password
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  sendTokenResponse(user, 200, res);
});

// *! This is not a route, it's a helper function
// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    signed: true,
    // httpOnly: false,
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
  });
};