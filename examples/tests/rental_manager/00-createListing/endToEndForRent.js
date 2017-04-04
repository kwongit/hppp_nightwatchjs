/* jshint expr: true */
module.exports = {
  '[00] - Sign in / register | https://hotpads.com/login' : function (client) {
    client
      .url('https://hotpads.com/login')
      .pause(1000);
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

  '[03] - Navigate to /rental-manager/' : function (client) {
    client.url('https://hotpads.com/rental-manager/', function(result) {
    var hello = client.page.hppp.rentalManager();
    hello.click('@post');
    client.pause(1000);
    });
  },

  '[04] - Select your listing type: For rent' : function (client) {
    var listings = client.page.hppp.listingType();
    listings.click('@forRent');
    client.pause(1000);
  },

  '[05] - Select your property type: Townhouse' : function (client) {
    var types = client.page.hppp.propertyType();
    types.click('@townhouse');
    client.pause(3000);
  },

  '[06] - Post a listing: Location' : function (client) {
    var location = client.page.hppp.postingInfo();
    location.locationAddress();
  },

  '[07] - Post a listing: Details and Description' : function (client) {
    var details = client.page.hppp.postingInfo();
    details.detailsDescription();
  },

  '[08] - Post a listing: Contact Information' : function (client) {
    var info = client.page.hppp.postingInfo();
    info.contactInfo();

    var phone = client.page.hppp.verifyPhone();
    phone.click('@sms');
    client.pause(1000);
  },

  '[09] - Post a listing: Photos' : function (client) {
    var upload = client.page.hppp.postingInfo();
    upload.uploadPhoto();
    client.pause(1000);
  },

  '[10] - Post a listing: Amenities and Rules | Amenities' : function (client) {
    var amenities = client.page.hppp.amenitiesRules();
    amenities.click('@ac');
    amenities.click('@balcony2');
    amenities.click('@furnished');
    amenities.click('@hardwood2');
    client.pause(1000);
  },

  '[11] - Post a listing: Amenities and Rules | Laundry' : function (client) {
    var laundry = client.page.hppp.amenitiesRules();
    laundry.click('@none');
    client.pause(1000);
  },

  '[12] - Post a listing: Amenities and Rules | Pets' : function (client) {
    var pets = client.page.hppp.amenitiesRules();
    pets.click('@noPetsAllowed');
    client.pause(1000);
  },

  '[13] - Now saving...' : function (client) {
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
