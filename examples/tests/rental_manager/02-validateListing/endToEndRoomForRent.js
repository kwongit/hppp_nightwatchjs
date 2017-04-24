/* jshint expr: true */
module.exports = {
  '[00] - Sign in / register | https://hotpads.com/login' : function (client) {
    client
      .url('https://hotpads.com/login')
      .pause(1000);

    var verify = client.page.hppp.login();
    verify.expect.element('@login').to.be.visible;
    verify.expect.element('@emailField').to.be.visible;
    verify.expect.element('@continue').to.be.visible;
  },

  '[01] - Enter valid email:' : function (client) {
    var login = client.page.hppp.login();
    login.noEmail();
    login.expect.element('@noEmail').to.be.visible;
    login.email();
    login.expect.element('@emailField').to.have.value.that.equals('v-kevinwo@hotpads.com');
    client.pause(1000);
  },

  '[02] - Enter valid password:' : function (client) {
    var login = client.page.hppp.login();
    login.noPassword();
    login.expect.element('@noPassword').to.be.visible;
    login.badPassword();
    client.pause(1000);
    login.expect.element('@badPassword').to.be.visible;
    login.password();
    login.expect.element('@passwordField').to.have.value.that.equals('Zillow1234!');
    client.pause(1000);
  },

  '[03] - Navigate to /rental-manager/' : function (client) {
    client.url('https://hotpads.com/rental-manager/', function(result) {
    var hello = client.page.hppp.rentalManager();
    hello.expect.element('@hello').to.be.present;
    hello.expect.element('@post').to.be.present;
    hello.expect.element('@listings').to.be.present;
    hello.expect.element('@back').to.be.present;
    hello.expect.element('@email').to.be.present;
    hello.click('@post');
    client.pause(1000);
    });
  },

  '[04] - Check for listing types: (2) | Select room for rent' : function (client) {
    var listings = client.page.hppp.listingType();
    listings.expect.element('@posting').to.be.visible;
    listings.expect.element('@select').to.be.visible;
    listings.expect.element('@view').to.be.visible;
    listings.expect.element('@forRent').to.be.visible;
    listings.expect.element('@roomForRent').to.be.visible;
    listings.click('@roomForRent');
    client.pause(1000);
  },

  '[05] - Check for property types: (4) | Select house' : function (client) {
    var types = client.page.hppp.propertyType();
    types.expect.element('@select').to.be.visible;
    types.expect.element('@goBack').to.be.visible;
    types.expect.element('@house').to.be.visible;
    types.expect.element('@townhouse').to.be.visible;
    types.expect.element('@condo').to.be.visible;
    types.click('@house');
    client.pause(3000);
  },

  'Return \'{URL}\':' : function (client) {
    client.url(function(result) {
      console.log(result);
    });
  },

  '[06] - Verify property type: house' : function (client) {
    var type = client.page.hppp.validation.blankPostingInfo();
    type.expect.element('@roomForRent').to.be.visible;
    client.pause(1000);
  },

  '[07] - Save button should be disabled' : function (client) {
    var save = client.page.hppp.validation.blankPostingInfo();
    save.expect.element('@save').to.not.be.enabled;
    client.pause(1000);
  },

  '[08] - Check left nav menu:' : function (client) {
    var leftNav = client.page.hppp.validation.blankPostingInfo();
    // leftNav.expect.element('@toDoNav').to.be.visible;
    leftNav.expect.element('@locationNav').to.be.visible;
    leftNav.expect.element('@detailsDescriptionNav').to.be.visible;
    leftNav.expect.element('@amenitiesAndRulesNav').to.be.visible;
    leftNav.expect.element('@photosNav').to.be.visible;
    leftNav.expect.element('@contactInfoNav').to.be.visible;
  },

  '[09] - Post a listing: No Location' : function (client) {
    var location = client.page.hppp.validation.blankPostingInfo();
    // location.expect.element('@locationHeader').to.be.visible;
    location.locationAddress();
    location.expect.element('@street').to.have.value.that.equals('');
    location.expect.element('@city').to.have.value.that.equals('');
    location.expect.element('@state').to.have.value.that.equals('');
    location.expect.element('@zip').to.have.value.that.equals('');
  },

  '[09] - Post a listing: No Details and Description' : function (client) {
    var details = client.page.hppp.validation.blankPostingInfo();
    // details.expect.element('@detailsDescriptionHeader').to.be.visible;
    details.detailsDescription();
    details.expect.element('@copy1').to.be.visible;
    details.expect.element('@copy2').to.be.visible;
    details.expect.element('@price').to.have.value.that.equals('');
    details.expect.element('@beds').to.have.value.that.equals('');
    details.expect.element('@baths').to.have.value.that.equals('');
    details.expect.element('@description').to.have.value.that.equals('');
  },

  '[10] - Post a listing: No Contact Information' : function (client) {
    var info = client.page.hppp.validation.blankPostingInfo();
    // info.expect.element('@contactInfoHeader').to.be.visible;
    info.contactInfo();
    info.expect.element('@name').to.have.value.that.equals('');
    info.expect.element('@phone').to.have.value.that.equals('');

    client.expect.element('input[name=contactEmail]').to.have.value.that.equals('v-kevinwo@hotpads.com');
  },

  // '[11] - Post a listing: No Photos' : function (client) {
  //   var upload = client.page.hppp.validation.blankPostingInfo();
  //   // upload.expect.element('@photosHeader').to.be.visible;
  //   upload.uploadPhoto();
  //   client.pause(1000);
  // },

  '[12] - Save button should now be enabled' : function (client) {
    var save = client.page.hppp.postingInfo();
    save.expect.element('@save').to.be.enabled;
    client.pause(1000);
  },

  '[13] - Clicking on Activate should throw errors' : function (client) {
    var activate = client.page.hppp.postingInfo();
    activate.expect.element('@active2').to.be.enabled;
    activate.click('@active2');
    activate.click('@active2');
    client.pause(1000);
  },

  '[14] - Show errors | Missing required fields:' : function (client) {
    var errors = client.page.hppp.validation.blankPostingInfo();
    errors.expect.element('@noStreet').to.be.visible.before(3000);
    errors.expect.element('@noCity').to.be.visible;
    errors.expect.element('@noState').to.be.visible;
    errors.expect.element('@noZip').to.be.visible;
    errors.expect.element('@noBeds').to.be.visible;
    errors.expect.element('@noBaths').to.be.visible;
    errors.expect.element('@noDescription').to.be.visible;
    errors.expect.element('@noPhone1').to.be.visible;
    errors.expect.element('@formErrors').to.be.visible;
    // errors.expect.element('@errorOccurred').to.be.visible;
  },

  '[15] - Post a listing: Location' : function (client) {
    var location = client.page.hppp.postingInfo();
    location.locationAddress();
    location.expect.element('@street').to.have.value.that.equals('33 Vista Rd');
    location.expect.element('@city').to.have.value.that.equals('Alameda');
    location.expect.element('@state').to.have.value.that.equals('CA');
    location.expect.element('@zip').to.have.value.that.equals('94502');
  },

  '[16] - Post a listing: Details and Description' : function (client) {
    var details = client.page.hppp.postingInfo();
    details.detailsDescription();
    details.expect.element('@price').to.have.value.that.equals('$3500');
    details.expect.element('@beds').to.have.value.that.equals('3');
    details.expect.element('@baths').to.have.value.that.equals('2.5');
    details.expect.element('@description').to.have.value.that.equals('This is an awesome place!');
  },

  '[17] - Post a listing: Contact Information' : function (client) {
    var info = client.page.hppp.postingInfo();
    info.contactInfo();
    info.expect.element('@name').to.have.value.that.equals('QA Test');
    info.expect.element('@phone').to.have.value.that.equals('(415) 555-5555');

    var phone = client.page.hppp.verifyPhone();
    phone.expect.element('@sms').to.be.visible;
    phone.expect.element('@phoneCall').to.be.visible;
    phone.click('@sms');
    client.pause(1000);
  },

  '[18] - Post a listing: Photos' : function (client) {
    var upload = client.page.hppp.postingInfo();
    upload.uploadPhoto();
    client.pause(1000);
  },

  '[19] - Post a listing: Amenities and Rules | Amenities' : function (client) {
    var amenities = client.page.hppp.amenitiesRules();
    amenities.expect.element('@amenitiesHeader').to.be.visible;
    amenities.click('@ac');
    amenities.click('@balcony2');
    amenities.click('@furnished');
    amenities.click('@hardwood2');
    client.pause(1000);
  },

  '[20] - Post a listing: Amenities and Rules | Laundry' : function (client) {
    var laundry = client.page.hppp.amenitiesRules();
    laundry.expect.element('@laundryHeader').to.be.visible;
    laundry.click('@none');
    client.pause(1000);
  },

  '[21] - Post a listing: Amenities and Rules | Pets' : function (client) {
    var pets = client.page.hppp.amenitiesRules();
    pets.expect.element('@petsHeader').to.be.visible;
    pets.click('@noPetsAllowed');
    client.pause(1000);
  },

  '[22] - Now saving...' : function (client) {
    var save = client.page.hppp.postingInfo();
    save.expect.element('@save').to.be.enabled;
    save.click('@save');
    client.pause(1000);
  },
};
