/* jshint expr: true */
module.exports = {
  '[00] - Sign in / register | https://hotpads.com/rental-manager/login' : function (client) {
    client
      .url('https://hotpads.com/rental-manager/login/')
      .pause(1000);
  },

  '[01] - Enter valid email:' : function (client) {
    var login = client.page.hppp.login();
    login.email();
    login.expect.element('@emailField').to.have.value.that.equals('v-kevinwo@zillowgroup.com');
    client.pause(1000);
  },

  '[02] - Enter valid password:' : function (client) {
    var login = client.page.hppp.login();
    login.password();
    login.expect.element('@passwordField').to.have.value.that.equals('test123');
    client.pause(1000);
  },

  '[03] - Navigate to https://hotpads.com/rental-manager/user/edit-listing/1610044' : function (client) {
    client.url('https://hotpads.com/rental-manager/user/edit-listing/1610044', function(result) {
    });
    client.pause(1000);
  },

  '[11] - Clicking on Activate should throw errors' : function (client) {
    var activate = client.page.hppp.postingInfo();
    activate.expect.element('@active2').to.be.enabled;
    activate.click('@active2');
    activate.click('@active2');
    client.pause(1000);
  },

  '[12] - Show errors | Missing required fields:' : function (client) {
    var errors = client.page.hppp.validation.blankPostingInfo();
    errors.expect.element('@noStreet').to.be.visible.before(3000);
    errors.expect.element('@noCity').to.be.visible;
    errors.expect.element('@noState').to.be.visible;
    errors.expect.element('@no_zip').to.be.visible;
    errors.expect.element('@no_beds').to.be.visible;
    errors.expect.element('@no_baths').to.be.visible;
    errors.expect.element('@no_description').to.be.visible;
    errors.expect.element('@no_phone2').to.be.visible;
    errors.expect.element('@form_errors').to.be.visible;
    // errors.expect.element('@error_occurred').to.be.visible;
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
    phone.expect.element('@phonecall').to.be.visible;
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
    amenities.expect.element('@furnished').to.be.visible;
    amenities.click('@furnished');
    amenities.click('@furnished');
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
