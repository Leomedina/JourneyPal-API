/**
 *
 * Collection of routes for '/api' allowing the use of Foursquare' search/
 *
 * Routes:
 *  -> GET.
 *
 * Middleware:
 *  -> None
 *
*/

const express = require('express');
const router = new express.Router();
const foursquare = require('../helpers/foursquareAPI');

router.get('/', async function (req, res, next) {
  try {
    const result = await foursquare.getRecommendations("new york city", "museum");
    console.log(result);
    res.status(200).json(result)
  } catch (error) {
    next(error);
  };
});

module.exports = router;