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
    client.assert.urlContains('http://hotpads.com/listings/myListings');
    });
  },

  '[02] - Verify listings found:' : function (client) {
    client.waitForElementVisible('#listing-count', 100, false);
    client.pause(1000);
  },

  '[03] - Will keep clicking on listings found and delete listing...:' : function (client) {
    for (var i = 0; i < 5; i++) {
      var firstListingToBeDeleted = client.page.rental_manager.login();
      firstListingToBeDeleted.click('@listingsFound');
      firstListingToBeDeleted.waitForElementVisible('@deleteListing', 10000, false);
      firstListingToBeDeleted.click('@deleteListing');
      firstListingToBeDeleted.deleteYes();
      client.pause(1000);
    }
  },
};
