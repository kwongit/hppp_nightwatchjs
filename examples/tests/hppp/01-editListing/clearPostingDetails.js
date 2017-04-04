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

  '[03] - Post a listing: Location' : function (client) {
    var location = client.page.hppp.postingInfo();
    location.clearLocation();
  },

  '[04] - Post a listing: Details and Description' : function (client) {
    var details = client.page.hppp.postingInfo();
    details.clearDetails();
  },

  '[05] - Post a listing: Contact Information' : function (client) {
    var info = client.page.hppp.postingInfo();
    info.clearContact();
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