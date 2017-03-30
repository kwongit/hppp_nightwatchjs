/* jshint expr: true */
module.exports = {
  '[00] - Click on CTA button: Post a listing' : function (client) {
    client
      .url('https://hotpads.com/')
      .pause(1000);

    var cta = client.page.hp.landing_page();
    cta.click('@post_a_listing_btn');
    client.pause(1000);
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

  '[03] - Select your listing type:' : function (client) {
    var listings = client.page.hp.listing_type();
    listings.click('@forrent');
    client.pause(1000);
  },

  '[04] - Select your property type:' : function (client) {
    var types = client.page.hp.property_type();
    types.click('@townhouse');
    client.pause(3000);
  },

  'Return \'{URL}\':' : function (client) {
    client.url(function(result) {
      console.log(result);
    });
  },
};
