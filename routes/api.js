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
    const { location, category } = req.body;
    console.log(location, category)
    const result = await foursquare.getRecommendations(location, category);
    res.status(200).json(result)
  } catch (error) {
    next(error);
  };
});

module.exports = router;