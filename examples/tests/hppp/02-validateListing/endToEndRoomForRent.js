/* jshint expr: true */
module.exports = {
  '[00] - Look for the CTA button: Post a listing' : function (client) {
    client
      .url('https://hotpads.com/')
      .pause(1000);

    var cta = client.page.hppp.landingPage();
    cta.expect.element('@postAListingButton').to.be.visible;
    cta.click('@postAListingButton');
    client.pause(1000);
  },

  '[01] - Enter valid email:' : function (client) {
    var login = client.page.hppp.login();
    login.noEmail();
    login.expect.element('@noEmail').to.be.visible;
    login.email();
    login.expect.element('@emailField').to.have.value.that.equals('v-kevinwo@zillowgroup.com');
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
    login.expect.element('@passwordField').to.have.value.that.equals('test123');
    client.pause(1000);
  },

  '[03] - Check for listing types: (2)' : function (client) {
    var listings = client.page.hppp.listingType();
    listings.expect.element('@posting').to.be.visible;
    listings.expect.element('@select').to.be.visible;
    listings.expect.element('@view').to.be.visible;
    listings.expect.element('@forRent').to.be.visible;
    listings.expect.element('@roomForRent').to.be.visible;
    listings.click('@roomForRent');
    client.pause(1000);
  },

  '[04] - Check for property types: (4)' : function (client) {
    var types = client.page.hppp.propertyType();
    types.expect.element('@house').to.be.visible;
    types.expect.element('@townhouse').to.be.visible;
    types.expect.element('@condo').to.be.visible;
    types.expect.element('@posting').to.be.visible;
    types.expect.element('@select').to.be.visible;
    types.expect.element('@goBack').to.be.visible;
    types.click('@house');
    client.pause(3000);
  },

  '[05] - Save button should be disabled' : function (client) {
    client.pause(2000);

    var save = client.page.hppp.validation.blankPostingInfo();
    save.expect.element('@save').to.not.be.enabled;
    client.pause(1000);
  },

  '[06] - Post a listing: No Location' : function (client) {
    var location = client.page.hppp.validation.blankPostingInfo();
    location.locationAddress();
    location.expect.element('@street').to.have.value.that.equals('');
    location.expect.element('@city').to.have.value.that.equals('');
    location.expect.element('@state').to.have.value.that.equals('');
    location.expect.element('@zip').to.have.value.that.equals('');
  },

  '[07] - Post a listing: No Details and Description' : function (client) {
    var details = client.page.hppp.validation.blankPostingInfo();
    details.detailsDescription();
    details.expect.element('@copy1').to.be.visible;
    details.expect.element('@copy2').to.be.visible;
    details.expect.element('@price').to.have.value.that.equals('');
    details.expect.element('@beds').to.have.value.that.equals('');
    details.expect.element('@baths').to.have.value.that.equals('');
    details.expect.element('@description').to.have.value.that.equals('');
  },

  '[08] - Post a listing: No Contact Information' : function (client) {
    var info = client.page.hppp.validation.blankPostingInfo();
    info.contactInfo();
    info.expect.element('@name').to.have.value.that.equals('');
    info.expect.element('@phone').to.have.value.that.equals('');

    client.expect.element('input[name=contactEmail]').to.have.value.that.equals('v-kevinwo@zillowgroup.com');
  },

  '[09] - Post a listing: No Photos' : function (client) {
    var upload = client.page.hppp.validation.blankPostingInfo();
    upload.uploadPhoto();
    client.pause(1000);
  },

  '[10] - Save button should now be enabled' : function (client) {
    var save = client.page.hppp.postingInfo();
    save.expect.element('@save').to.be.enabled;
    client.pause(1000);
  },

  '[11] - Clicking on Activate should throw errors' : function (client) {
    var activate = client.page.hppp.postingInfo();
    activate.expect.element('@active1').to.be.enabled;
    activate.click('@active1');
    activate.click('@active1');
    client.pause(1000);
  },

  '[12] - Show errors | Missing required fields:' : function (client) {
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
    errors.expect.element('@errorOccurred').to.be.visible;
  },

  '[13] - Post a listing: Location' : function (client) {
    var location = client.page.hppp.postingInfo();
    location.locationAddress();
    location.expect.element('@street').to.have.value.that.equals('33 Vista Rd');
    location.expect.element('@city').to.have.value.that.equals('Alameda');
    location.expect.element('@state').to.have.value.that.equals('CA');
    location.expect.element('@zip').to.have.value.that.equals('94502');
  },

  '[14] - Post a listing: Details and Description' : function (client) {
    var details = client.page.hppp.postingInfo();
    details.detailsDescription();
    details.expect.element('@price').to.have.value.that.equals('$3500');
    details.expect.element('@beds').to.have.value.that.equals('3');
    details.expect.element('@baths').to.have.value.that.equals('2.5');
    details.expect.element('@description').to.have.value.that.equals('This is an awesome place!');
  },

  '[15] - Post a listing: Contact Information' : function (client) {
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

  '[16] - Post a listing: Photos' : function (client) {
    var upload = client.page.hppp.postingInfo();
    upload.uploadPhoto();
    client.pause(1000);
  },

  '[17] - Post a listing: Amenities and Rules | Amenities' : function (client) {
    var amenities = client.page.hppp.amenitiesRules();
    amenities.expect.element('@ac').to.be.visible;
    amenities.click('@ac');
    amenities.click('@balcony');
    amenities.click('@furnished');
    amenities.click('@hardwood');
    client.pause(1000);
  },

  '[18] - Post a listing: Amenities and Rules | Laundry' : function (client) {
    var laundry = client.page.hppp.amenitiesRules();
    laundry.expect.element('@none').to.be.visible;
    laundry.click('@none');
    client.pause(1000);
  },

  '[19] - Post a listing: Amenities and Rules | Pets' : function (client) {
    var pets = client.page.hppp.amenitiesRules();
    pets.expect.element('@noPetsAllowed').to.be.visible;
    pets.click('@noPetsAllowed');
    client.pause(1000);
  },

  '[20] - Now saving...' : function (client) {
    var save = client.page.hppp.postingInfo();
    save.expect.element('@save').to.be.enabled;
    save.click('@save');
    client.pause(1000);
  },

  'Return \'{URL}\':' : function (client) {
    client.url(function(result) {
      console.log(result);
    });
  },
};
