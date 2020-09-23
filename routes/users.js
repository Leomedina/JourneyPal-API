/** 
 * 
 * Collection of routes for '/users'
 *
 * Routes:
 *  -> GET    "/"       - Return all or some users.
 *  -> POST   "/"       - Creates new user.
 *  -> GET    "/id"     - Returns selected user.
 *  -> PUT    "/id"     - Updates selected user. (NOT IMPLEMENTED)
 *  -> DELETE "/id"     - Deletes selected user.
 *
 * Middleware:
 *  -> JSON schema validator for new users.
 * 
*/

const express = require('express');
const router = new express.Router();
const passHash = require('../helpers/passHash');
const { valUserSchema } = require('../middleware/schemaValidators');
const { userTable } = require('../model/models');

/**  GET to '/users' */
router.get('/', async function (req, res, next) {
  try {
    const results = await userTable.findAll(req.query);
    return res.status(200).json({ "users": results });
  } catch (error) {
    return next(error);
  };
});

/** POST to '/users' */
router.post('/', valUserSchema, async function (req, res, next) {
  try {
    const newPass = await passHash(req.body.password)
    req.body.password = newPass;
    const newUser = await userTable.create(req.body);
    return res.status(201).json({ newUser });
  } catch (error) {
    return next(error);
  };
});

/** GET to '/users/id' */
router.get('/:id', async function (req, res, next) {
  try {
    const result = await userTable.get(req.params.id);
    if (!result) throw new Error('No User Found');
    return res.status(200).json({ 'User': result });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async function (req, res, next) {
  try {
    await userTable.remove(req.params.id);
    return res.status(200).json('Success');
  } catch (error) {
    next(error);
  }
});

module.exports = router;