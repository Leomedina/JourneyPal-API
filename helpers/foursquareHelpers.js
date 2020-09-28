/**
 *
 * Axillary helper functions for Foursquare API
 *
 */

class FoursquareHelper {
  /** Helper class */

  venueResultCleaned(result) {
    const venue = {
      venue_id: result[0].venue.id,
      venue_name: result[0].venue.name,
      venue_location: result[0].venue.location,
      category: result[0].venue.categories,
    }
    const venueOne = {
      venue_id: result[1].venue.id,
      venue_name: result[1].venue.name,
      venue_location: result[1].venue.location,
      category: result[1].venue.categories,
    }
    const venueTwo = {
      venue_id: result[2].venue.id,
      venue_name: result[2].venue.name,
      venue_location: result[2].venue.location,
      category: result[2].venue.categories,
    }

    return [venue, venueOne, venueTwo];
  };
 
};

const foursquareHelper = new FoursquareHelper();

module.exports = foursquareHelper;