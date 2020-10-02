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
const foursquareHelper = require('../helpers/foursquareHelpers');

router.get('/venue', async function (req, res, next) {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

    const { location, category } = req.body;

    const result = await foursquare.getRecommendations(location, category);
    res.status(200).json(foursquareHelper.venueResultCleaned(result));
  } catch (error) {
    next(error);
  };
});

router.get('/eat', async function (req, res, next) {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

    const { lat, lng, type } = req.body;
    const result = await foursquare.getFoodRec(lat, lng, type);
    res.status(200).json(foursquareHelper.venueResultCleaned(result));
  } catch (error) {
    next(error);
  }
});

router.get('/tips', async function (req, res, next) {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

    const { venueId } = req.body;
    const result = await foursquare.getTips(venueId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;