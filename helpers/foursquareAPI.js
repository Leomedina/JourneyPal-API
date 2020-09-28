/**
 * 
 * Helper functions that call Foursquare' API and is largely used by the '/api' route
 * 
 */

const { FOURSQUARE_CID, FOURSQUARE_CS, FOURSQUARE_V } = require('../config');
const axios = require('axios');
const baseURL = "https://api.foursquare.com/v2"

class Foursquare {
  constructor() {
    this.clientId = FOURSQUARE_CID;
    this.clientSecret = FOURSQUARE_CS;
  };

  async getRecommendations(location, search) {
    try {
      const response = await axios({
        url: `${baseURL}/venues/explore`,
        method: 'GET',
        params: {
          client_id: FOURSQUARE_CID,
          client_secret: FOURSQUARE_CS,
          near: location,
          'query': search,
          v: '20180323',
          limit: 4,
        },
      });
      return response.data.response.groups[0].items;
    } catch (error) {
      console.log(error)
    }
  };
};

const foursquare = new Foursquare();
module.exports = foursquare;