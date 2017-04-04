/* jshint expr: true */
module.exports = {
  '[00] - Edit Listing | https://hotpads.com/user/edit-listing/1609129' : function (client) {
    client
      .url('https://hotpads.com/user/edit-listing/1609129')
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

  '[10] - Post a listing: Amenities and Rules | Amenities' : function (client) {
    var amenities = client.page.hppp.amenitiesRules();
    amenities.click('@ac');
    amenities.click('@balcony');
    amenities.click('@furnished');
    amenities.click('@hardwood');
    client.pause(1000);
  },

  '[06] - Now saving...' : function (client) {
    var save = client.page.hppp.postingInfo();
    save.click('@save');
    client.pause(1000);
  },

  'Return \'{URL}\':' : function (client) {
    client.url(function(result) {
      console.log(result);
    });
  },
};
