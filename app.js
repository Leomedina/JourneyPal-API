const express = require('express');
const ExpressError = require('./helpers/ExpressError');
const app = express();

/** Allow JSON body parsing */
app.use(express.json());

app.get('/', function (res) {
  return res.status(200).json({
    'status': 201,
    'item': "NOTHING",
  })
});

/** 404 Error Handler */
app.use(function (next) {
  const error = new ExpressError("Not Found", 404);
  return next(error);
});

/** Error Handler */
app.use(function (err, res) {
  res.status = err.status || 500;

  return res.json({
    status: res.status,
    message: err.message
  });
});

module.exports = app;