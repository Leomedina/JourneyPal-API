/** Shared configs for the application */
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY || "test";
const FOURSQUARE_CID = process.env.FOURSQUARE_CID;
const FOURSQUARE_CS = process.env.FOURSQUARE_CS;
const FOURSQUARE_V = '20180323'

const PORT = +process.env.PORT || 3005;
let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "journey-test";
} else {
  DB_URI = process.env.DATABASE_URL || "journey";
}

module.exports = {
  SECRET_KEY,
  PORT,
  DB_URI,
  FOURSQUARE_CID,
  FOURSQUARE_CS,
  FOURSQUARE_V
};