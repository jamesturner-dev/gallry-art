const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const fileupload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require("helmet");
const morgan = require("morgan");
const xss = require("xss-clean");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

dotenv.config({ path: "./config/config.env" });
connectDB();

const gallaries = require("./routes/galleries");
const images = require("./routes/images");
const auth = require("./routes/auth");
const users = require("./routes/users");
const count = require("./routes/count");
const search = require("./routes/search");
const vote = require("./routes/vote");

const app = express();

app.use(express.json());
app.use(cookieParser('secret'));
app.use(xss());

var cors = require("cors");
app.use(cors());

app.use(mongoSanitize());
app.use(helmet());

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100,
});

app.use(limiter);
app.use(hpp());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(fileupload());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/gallery", gallaries);
app.use("/api/v1/images", images);
app.use("/api/v1/auth", auth);
app.use("/api/v1/users", users);
app.use("/api/v1/count", count);
app.use("/api/v1/search", search);
app.use("/api/v1/vote", vote);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV || "development";

const server = app.listen(
  PORT,
  console.log(`Server running in ${MODE} mode on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
