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

  '[03] - Select your listing type: Room for rent' : function (client) {
    var listings = client.page.hppp.listingType();
    listings.click('@roomForRent');
    client.pause(1000);
  },

  '[04] - Select your property type: House' : function (client) {
    var types = client.page.hppp.propertyType();
    types.click('@house');
    client.pause(3000);
  },

  'Return \'{URL}\':' : function (client) {
    client.url(function(result) {
      console.log(result);
    });
  },
};
