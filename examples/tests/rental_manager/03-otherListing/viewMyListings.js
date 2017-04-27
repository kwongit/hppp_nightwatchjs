/* jshint expr: true */
module.exports = {
  '[00] - Sign in / register | https://hotpads.com/login' : function (client) {
    client
      .url('https://hotpads.com/login')
      .pause(1000);
    var login = client.page.rental_manager.login();
    login.inputEmail();
    client.pause(1000);
    login.inputPassword();
    client.pause(1000);
  },

  '[01] - Navigate to /rental-manager | My Listings' : function (client) {
    client.url('https://hotpads.com/rental-manager/', function(result) {
        var hello = client.page.rental_manager.postAListing();
        hello.click('@myListings');
        client.pause(1000);
    });
  },

  '[02] - Verify listings found:' : function (client) {
    client.expect.element('#listing-count').to.be.present;
    client.pause(1000);
  },

  'Return \'{URL}\':' : function (client) {
    client.url(function(result) {
      console.log(result);
    });
  },
};
