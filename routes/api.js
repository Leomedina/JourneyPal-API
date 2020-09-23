/**
 *
 * Collection of routes for '/api' allowing the use of Foursquare' search/
 *
 * Routes:
 *  -> GET.
 *
 * Middleware:
 *  -> None.
 *
*/

const express = require('express');
const router = express.Router();
const foursquare = require('../helpers/foursquareAPI');

router.get('/', async function (req, res, next) {
  try {
    // const result = await foursquare.get()
    res.status(200).json("success")
  } catch (error) {
    next(error);
  };
});

module.exports = router;