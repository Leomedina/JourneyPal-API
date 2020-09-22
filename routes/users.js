/** 
 * 
 * Collection of routes for '/users'
 *
 * Routes
 *  -> GET    "/"       - Return all users.
 *  -> POST   "/"       - Creates new user.
 *  -> GET    "/handle" - Returns selected user.
 *  -> PUT    "/handle" - Updates selected user.
 *  -> DELETE "/handle" - Deletes selected user.
 *
 * Middleware
 *  -> JSON schema validator for new users.
 * 
*/

const express = require('express');
const Model = require('lightweight-pg-orm');
const router = new express.Router();
const { valUserSchema } = require('../middleware/schemaValidators');
const passHash = require('../helpers/passHash');

/** Instantiates a new table using LPG-orm npm packaged that I created. */
const userTable = new Model("users", "id", ["id", "email", "password"]);

/** Route that returns all users */
router.get('/', function (req, res, next) {
  return res.json({ 'status': 200, 'message': 'user page' });
});

/** POST to '/users' creates a new user */
router.post('/', valUserSchema, async function (req, res, next) {
  try {
    const newPass = await passHash(req.body.password)
    req.body.password = newPass;
    const newUser = await userTable.create(req.body);
    return res.status(200).json({ newUser });
  } catch (error) {
    return next(error);
  };
});

module.exports = router;