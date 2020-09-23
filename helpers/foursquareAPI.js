/**
 * 
 * Helper functions that call Foursquare' API and is largely used by the '/api' route
 * 
 */

const { FOURSQUARE_CID, FOURSQUARE_CS } = require('../config');

class Foursquare {
  constructor() {
    this.clientId = FOURSQUARE_CID;
    this.clientSecret = FOURSQUARE_CS;
  };
};

const foursquare = new Foursquare();
module.exports = foursquare;