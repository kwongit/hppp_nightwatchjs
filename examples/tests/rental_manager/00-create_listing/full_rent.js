/* jshint expr: true */
module.exports = {
  '[00] - Sign in / register | https://hotpads.com/login' : function (client) {
    client
      .url('https://hotpads.com/login')
      .pause(1000);
  },

  '[01] - Enter email:' : function (client) {
    var login = client.page.hp.login();
    login.email();
    client.pause(1000);
  },

  '[02] - Enter password:' : function (client) {
    var login = client.page.hp.login();
    login.password();
    client.pause(1000);
  },

  '[03] - Navigate to /rental-manager/' : function (client) {
    client.url('https://hotpads.com/rental-manager/', function(result) {
    var hello = client.page.hp.rental_manager();
    hello.click('@post');
    client.pause(1000);
    });
  },

  '[04] - Select your listing type: For rent' : function (client) {
    var listings = client.page.hp.listing_type();
    listings.click('@forrent');
    client.pause(1000);
  },

  '[05] - Select your property type: Townhouse' : function (client) {
    var types = client.page.hp.property_type();
    types.click('@townhouse');
    client.pause(3000);
  },

  '[06] - Post a listing: Location' : function (client) {
    var location = client.page.hp.posting_info();
    location.location_address();
  },

  '[07] - Post a listing: Details and Description' : function (client) {
    var details = client.page.hp.posting_info();
    details.details_description();
  },

  '[08] - Post a listing: Contact Information' : function (client) {
    var info = client.page.hp.posting_info();
    info.contact_info();

    var phone = client.page.hp.verify_phone();
    phone.click('@sms');
    client.pause(1000);
  },

  '[09] - Post a listing: Photos' : function (client) {
    var upload = client.page.hp.posting_info();
    upload.upload_photo();
    client.pause(1000);
  },

  '[10] - Post a listing: Amenities and Rules | Amenities' : function (client) {
    var amenities = client.page.hp.amenities_rules();
    amenities.click('@furnished');
    amenities.click('@furnished');
    client.pause(1000);
  },

  '[11] - Post a listing: Amenities and Rules | Laundry' : function (client) {
    var laundry = client.page.hp.amenities_rules();
    laundry.click('@none');
    client.pause(1000);
  },

  '[12] - Post a listing: Amenities and Rules | Pets' : function (client) {
    var pets = client.page.hp.amenities_rules();
    pets.click('@nopetsallowed');
    client.pause(1000);
  },

  '[13] - Now saving...' : function (client) {
    var save_button = client.page.hp.posting_info();
    save_button.click('@save');
    client.pause(1000);
  },

  'Return \'{URL}\':' : function (client) {
    client.url(function(result) {
      console.log(result);
    });
  },
};
