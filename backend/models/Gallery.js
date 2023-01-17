const mongoose = require("mongoose");
const slugify = require("slugify");

const GallerySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      unique: true,
      trim: true,
      maxlength: [50, "Name can not be more than 50 characters"],
    },

    slug: String,

    description: {
      type: String,
      required: [true, "Please add a description"],
      maxlength: [500, "Description can not be more than 500 characters"],
    },

    img: {
      type: String,
      default: "no-photo.jpg",
    },

    tags: {
      type: [String],
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

GallerySchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
}),
  GallerySchema.pre("remove", async function (next) {
    console.log(`Deleting images associated with ${this._id}`);
    await this.model("Image").deleteMany({ gallery: this._id });
    next();
  });


GallerySchema.virtual("image", {
  ref: "Image",
  localField: "_id",
  foreignField: "gallery",
  justOne: false,
});

module.exports = mongoose.model("Gallery", GallerySchema);
