/* jshint expr: true */
module.exports = {
  '[00] - Click on CTA button: Post a listing' : function (client) {
    client
      .url('https://hotpads.com/')
      .pause(1000);

    var cta = client.page.hppp.landingPage();
    cta.click('@postAListingButton');
    client.pause(1000);
  },

  '[01] - Enter email:' : function (client) {
    var login = client.page.hppp.login();
    login.email();
    client.pause(1000);
  },

  '[02] - Enter password:' : function (client) {
    var login = client.page.hppp.login();
    login.password();
    client.pause(1000);
  },

  '[03] - Select your listing type: For rent' : function (client) {
    var listings = client.page.hppp.listingType();
    listings.click('@forRent');
    client.pause(1000);
  },

  '[04] - Select your property type: Townhouse' : function (client) {
    var types = client.page.hppp.propertyType();
    types.click('@townhouse');
    client.pause(3000);
  },

  '[05] - Post a listing: Location' : function (client) {
    var location = client.page.hppp.postingInfo();
    location.locationAddress();
  },

  '[06] - Post a listing: Details and Description' : function (client) {
    var details = client.page.hppp.postingInfo();
    details.detailsDescription();
  },

  '[07] - Post a listing: Contact Information' : function (client) {
    var info = client.page.hppp.postingInfo();
    info.contactInfo();

    var phone = client.page.hppp.verifyPhone();
    phone.click('@sms');
    client.pause(1000);
  },

  '[08] - Post a listing: Photos' : function (client) {
    var upload = client.page.hppp.postingInfo();
    upload.uploadPhoto();
    client.pause(1000);
  },

  '[09] - Post a listing: Amenities and Rules | Amenities' : function (client) {
    var amenities = client.page.hppp.amenitiesRules();
    amenities.click('@ac');
    amenities.click('@balcony');
    amenities.click('@furnished');
    amenities.click('@hardwood');
    client.pause(1000);
  },

  '[10] - Post a listing: Amenities and Rules | Laundry' : function (client) {
    var laundry = client.page.hppp.amenitiesRules();
    laundry.click('@none');
    client.pause(1000);
  },

  '[11] - Post a listing: Amenities and Rules | Pets' : function (client) {
    var pets = client.page.hppp.amenitiesRules();
    pets.click('@noPetsAllowed');
    client.pause(1000);
  },

  '[12] - Now saving...' : function (client) {
    var save_button = client.page.hppp.postingInfo();
    save_button.click('@save');
    client.pause(1000);
  },

  'Return \'{URL}\':' : function (client) {
    client.url(function(result) {
      console.log(result);
    });
  },
};
