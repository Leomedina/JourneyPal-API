/**
 *  Creates new table objects to interact with the database.
 * 
 *  Uses lightweight-PG-ORM a small package I wrote and can be fund:
 *  -> https://www.npmjs.com/package/lightweight-pg-orm
 * 
 *  Tables:
 *  --> User: Id (primary key), email, password
 *  -->
 */

const Model = require('lightweight-pg-orm');

/** Instantiates a new table using LPG-orm npm packaged that I created. */
const userTable = new Model("users", "id", [
  "id",
  "email",
  "password"
]);

module.exports = { userTable };