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

  '[01] - Navigate to /rental-manager/user/edit-listing/1630492' : function (client) {
    client
      .url('https://hotpads.com/rental-manager/user/edit-listing/1630492')
      .pause(1000);
  },

  '[02] - Edit: Location' : function (client) {
    var location = client.page.rental_manager.postAListing();
    location.editLocationAddress();
  },

  '[03] - Edit: Building details' : function (client) {
    var details = client.page.rental_manager.postAListing();
    details.editBuildingDetails();
  },

  '[04] - Edit: Floorplan details' : function (client) {
    var details = client.page.rental_manager.postAListing();
    details.editFloorplanDetails();
  },

  '[05] - Edit: Contact Information' : function (client) {
    var info = client.page.rental_manager.postAListing();
    info.editContactInfo();
  },

  '[06] - Now saving...' : function (client) {
    var save = client.page.rental_manager.postAListing();
    save.click('@saveListingButton');
    client.pause(1000);
  },

  'Return \'{URL}\':' : function (client) {
    client.url(function(result) {
      console.log(result);
    });
  },
};
