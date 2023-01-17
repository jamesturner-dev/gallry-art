const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a title"],
  },
  url: {
    type: String,
    match: [
      /^((http|https|ftp):\/\/)?(www.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
      "Please use a valid URL with HTTP or HTTPS",
    ],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
  clicks: {
    type: Number,
    required: [true, "How many clicks?"],
    default: 0,
  },
  rating: {
    type: Number,
    required: [true, "What is the rating?"],
    default: 1,
  },
  similar: {
    type: [String],
  },
  tags: {
    type: [String],
    required: true,
  },
  category: {
    type: String,
    enum: [
      "cool",
      "hot",
      "art",
      "food",
      "media",
      "sports",
      "travel",
      "social",
      "politics",
      "people",
      "things",
      "other",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  gallery: {
    type: mongoose.Schema.ObjectId,
    ref: "Gallery",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

ImageSchema.index({ title: "text", description: "text", tags: "text" });

module.exports = mongoose.model("Image", ImageSchema);
