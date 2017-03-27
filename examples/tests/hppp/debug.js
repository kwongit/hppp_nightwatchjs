/* jshint expr: true */
module.exports = {
  '[00] - Debugging | https://hotpads.com/user/edit-listing/1603861' : function (client) {
    client
      .url('https://hotpads.com/user/edit-listing/1603861')
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

  // '[03] - Select your listing type:' : function (client) {
  //   var listings = client.page.hp.listing_type();
  //   listings.expect.element('@forrent').to.be.visible;
  //   listings.expect.element('@r4r').to.be.visible;
  //   listings.click('@forrent');
  //   client.pause(1000);
  // },
  //
  // '[04] - Select your property type:' : function (client) {
  //   var types = client.page.hp.property_type();
  //   types.expect.element('@house').to.be.visible;
  //   types.expect.element('@townhouse').to.be.visible;
  //   types.expect.element('@condo').to.be.visible;
  //   types.expect.element('@apartment').to.be.visible;
  //   types.click('@townhouse');
  //   client.pause(1000);
  // },
  //
  // '[05] - Post a listing: Location' : function (client) {
  //   var location = client.page.hp.posting_info();
  //   location.location_address();
  // },
  //
  // '[06] - Post a listing: Details and Description' : function (client) {
  //   var details = client.page.hp.posting_info();
  //   details.details_description();
  // },
  //
  // '[07] - Post a listing: Contact Information' : function (client) {
  //   var info = client.page.hp.posting_info();
  //   info.contact_info();
  //
  //   client.expect.element('input[name=contactEmail]').to.have.value.that.equals('v-kevinwo@zillowgroup.com');
  //
  //   var phone = client.page.hp.verify_phone();
  //   phone.expect.element('@sms').to.be.enabled;
  //   phone.expect.element('@phonecall').to.be.enabled;
  //   phone.click('@sms');
  //   client.pause(1000);
  // },
  //
  // '[08] - Post a listing: Photos' : function (client) {
  //   var upload = client.page.hp.posting_info();
  //   upload.upload_photo();
  //   client.pause(1000);
  // },
  //
  // '[09] - Post a listing: Amenities and Rules | Amenities' : function (client) {
  //   var amenities = client.page.hp.amenities_rules();
  //   amenities.expect.element('@furnished').to.be.visible;
  //   amenities.click('@furnished');
  //   client.pause(1000);
  // },
  //
  // '[10] - Post a listing: Amenities and Rules | Laundry' : function (client) {
  //   var laundry = client.page.hp.amenities_rules();
  //   laundry.expect.element('@none').to.be.visible;
  //   laundry.click('@none');
  //   client.pause(1000);
  // },
  //
  // '[11] - Post a listing: Amenities and Rules | Pets' : function (client) {
  //   var pets = client.page.hp.amenities_rules();
  //   pets.expect.element('@nopetsallowed').to.be.visible;
  //   pets.click('@nopetsallowed');
  //   client.pause(1000);
  // },
};
