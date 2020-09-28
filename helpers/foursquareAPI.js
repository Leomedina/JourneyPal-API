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
          query: search,
          v: FOURSQUARE_V,
          limit: 3,
        },
      });
      return response.data.response.groups[0].items;
    } catch (error) {
      return error;
    }
  };

  async getFoodRec(lat, long, type) {
    try {
      const response = await axios({
        url: `${baseURL}/venues/explore`,
        method: 'GET',
        params: {
          client_id: FOURSQUARE_CID,
          client_secret: FOURSQUARE_CS,
          v: FOURSQUARE_V,
          ll: `${lat}, ${long}`,
          query: type,
          price: [1, 2, 3],
          sortByDistance: 1,
          limit: 3,
        },
      });
      return response.data.response.groups[0].items;
    } catch (error) {
      return error;

    }
  }

  async getTips(venueId) {
    try {
      const response = await axios({
        url: `${baseURL}/venues/${venueId}/tips`,
        method: 'GET',
        params: {
          client_id: FOURSQUARE_CID,
          client_secret: FOURSQUARE_CS,
          v: FOURSQUARE_V,
          sort: "popular",
          limit: 1,
        },
      });
      let text = response.data.response.tips.items[0].text;
      let userFirst = response.data.response.tips.items[0].user.firstName;
      let userLast = response.data.response.tips.items[0].user.lastName;
      return { tip: text, user: `${userFirst} ${userLast}` };
    } catch (error) {
      return error;
    }
  }
};

const foursquare = new Foursquare();

module.exports = foursquare;