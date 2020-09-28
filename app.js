global.__basedir = __dirname;

const express = require('express');
const ExpressError = require('./helpers/ExpressError');
const app = express();
const userRoutes = require('./routes/users');
const tripRoutes = require('./routes/trips');
const apiRoutes = require('./routes/api');

/** Allow JSON body parsing */
app.use(express.json());

/** Routes */
app.use('/users', userRoutes);
app.use('/api', apiRoutes);
app.use('/trips', tripRoutes);

app.get('/', function (req, res, next) {
  return res.status(200).json({
    'status': 200,
    'success': 'success'
  });
});

/** 404 Error Handler */
app.use(function (req, res, next) {
  const error = new ExpressError('Page Not Found', 404);
  return next(error);
});

/** Error Handler */
app.use(function (err, req, res, next) {
  res.status = err.status || 500;

  return res.json({
    status: res.status,
    message: err.message
  });
});

module.exports = app;