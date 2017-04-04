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

  '[03] - Click on other listings:' : function (client) {
    var others = client.page.hppp.listingType();
    others.click('@others');
    client.pause(1000);
  },

  '[04] - Verify other listings found:' : function (client) {
    client.expect.element('#listing-count').to.be.present;
  },

  'Return \'{URL}\':' : function (client) {
    client.url(function(result) {
      console.log(result);
    });
  },
};
