/**
 *  Creates new table objects to interact with the database.
 * 
 *  Uses lightweight-PG-ORM a small package I wrote and can be fund:
 *  -> https://www.npmjs.com/package/lightweight-pg-orm
 * 
 *  Tables:
 *  --> Users: Id (primary Key), email, password
 *  --> Trips: Id (Primary Key), user_id, location, hero_venue, food_venue, last_venue (optional)
 * 
 */

const Model = require('lightweight-pg-orm');

/** Instantiates a new table using LPG-orm npm packaged that I created. */
const userTable = new Model("Users", "id", [
  "id",
  "email",
  "password"
]);

const tripTable = new Model("Trips", "id", [
  "id",
  "user_id",
  "location",
  "hero_venue",
  "food_venue",
  "last_venue"
]);

module.exports = { userTable, tripTable };