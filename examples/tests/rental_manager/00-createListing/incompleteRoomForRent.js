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

  'Return \'{URL}\':' : function (client) {
    client.url(function(result) {
      console.log(result);
    });
  },
};
