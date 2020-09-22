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
*/

const express = require('express');
const router = new express.Router();

router.get('/', function (req, res, next) {
  return res.json({ 'status': 200, 'message': 'user page' })
});

module.exports = router;