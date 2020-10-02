/** 
 * 
 * Collection of routes for '/trips'
 *
 * Routes:
 *  -> GET    "/"       - Return all trips.
 *  -> POST   "/"       - Creates new trip.
 *  -> GET    "/id"     - Returns selected trip. (NOT IMPLEMENTED) 
 *  -> PUT    "/id"     - Updates selected trip. (NOT IMPLEMENTED)
 *  -> DELETE "/id"     - Deletes selected trip. (NOT IMPLEMENTED)
 *
 * Middleware:
 *  -> JSON schema validator for new trips.
 * 
*/

const express = require('express');
const router = new express.Router();
const { valTripSchema } = require('../middleware/schemaValidators');
const { tripTable } = require('../model/models');

/**  GET to '/trips' */
router.get('/', async function (req, res, next) {
  try {
    const results = await tripTable.findAll(req.query);
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

    //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    return res.status(200).json({ "trips": results });
  } catch (error) {
    return next(error);
  };
});

/** POST to '/trips' */
router.post('/', valTripSchema, async function (req, res, next) {
  try {
    const newTrip = await tripTable.create(req.body);
    return res.status(201).json({ newTrip });
  } catch (error) {
    return next(error);
  };
});

/** GET to '/trips/id' */
router.get('/:id', async function (req, res, next) {
  try {
    const result = await tripTable.get(req.params.id);
    if (!result) throw new Error('No User Found');
    return res.status(200).json({ 'Trip': result });
  } catch (error) {
    next(error);
  };
});

router.delete('/:id', async function (req, res, next) {
  try {
    await tripTable.remove(req.params.id);
    return res.status(200).json('Success');
  } catch (error) {
    next(error);
  };
});

module.exports = router;