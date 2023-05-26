const express = require("express");
const morgan = require("morgan");

const reviewRouter = require("./routes/reviewRoutes");

const app = express();

// 1) GLOBAL MIDDLWARES
// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// 3) ROUTES
app.use("/api/v1/reviews", reviewRouter);

// Any other route other than /reviews
// app.all("*", (req, res, next) => {
//   // GET /me? 200 153.699 ms - 3669
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });

// // app.use(globalErrorHandler);

module.exports = app;
