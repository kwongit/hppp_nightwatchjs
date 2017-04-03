/* jshint expr: true */
module.exports = {
  '[00] - Sign in / register | https://hotpads.com/login' : function (client) {
    client
      .url('https://hotpads.com/login')
      .pause(1000);
  },

  '[01] - Enter valid email:' : function (client) {
    var login = client.page.hp.login();
    login.no_email();
    login.expect.element('@no_email').to.be.visible;
    login.email();
    login.expect.element('@emailField').to.have.value.that.equals('v-kevinwo@zillowgroup.com');
    client.pause(1000);
  },

  '[02] - Enter valid password:' : function (client) {
    var login = client.page.hp.login();
    login.no_password();
    login.expect.element('@no_password').to.be.visible;
    login.bad_password();
    client.pause(1000);
    login.expect.element('@bad_password').to.be.visible;
    login.password();
    login.expect.element('@passwordField').to.have.value.that.equals('test123');
    client.pause(1000);
  },

  '[03] - Navigate to /rental-manager/' : function (client) {
    client.url('https://hotpads.com/rental-manager/', function(result) {
    var hello = client.page.hp.rental_manager();
    hello.expect.element('@hello').to.be.present;
    hello.expect.element('@post').to.be.present;
    hello.expect.element('@listings').to.be.present;
    hello.expect.element('@back').to.be.present;
    hello.expect.element('@email').to.be.present;
    hello.click('@post');
    client.pause(1000);
    });
  },

  '[04] - Check for listing types: (2)' : function (client) {
    var listings = client.page.hp.listing_type();
    listings.expect.element('@posting').to.be.visible;
    listings.expect.element('@select').to.be.visible;
    listings.expect.element('@view').to.be.visible;
    listings.expect.element('@forrent').to.be.visible;
    listings.expect.element('@r4r').to.be.visible;
    listings.click('@r4r');
    client.pause(1000);
  },

  '[05] - Check for property types: (4)' : function (client) {
    var types = client.page.hp.property_type();
    types.expect.element('@house').to.be.visible;
    types.expect.element('@townhouse').to.be.visible;
    types.expect.element('@condo').to.be.visible;
    types.expect.element('@apartment').to.be.visible;
    types.click('@house');
    client.pause(3000);
  },

  '[06] - Verify property type: house' : function (client) {
    var type = client.page.hp.validation.blank_posting_info();
    type.expect.element('@r4r').to.be.visible;
    client.pause(1000);
  },

  '[07] - Save button should be disabled' : function (client) {
    var save = client.page.hp.validation.blank_posting_info();
    save.expect.element('@save').to.not.be.enabled;
    client.pause(1000);
  },

  '[08] - Post a listing: No Location' : function (client) {
    var location = client.page.hp.validation.blank_posting_info();
    location.location_address();
    location.expect.element('@street').to.have.value.that.equals('');
    location.expect.element('@city').to.have.value.that.equals('');
    location.expect.element('@state').to.have.value.that.equals('');
    location.expect.element('@zip').to.have.value.that.equals('');
  },

  '[09] - Post a listing: No Details and Description' : function (client) {
    var details = client.page.hp.validation.blank_posting_info();
    details.details_description();
    details.expect.element('@price').to.have.value.that.equals('');
    details.expect.element('@beds').to.have.value.that.equals('');
    details.expect.element('@baths').to.have.value.that.equals('');
    details.expect.element('@description').to.have.value.that.equals('');
  },

  '[10] - Post a listing: No Contact Information' : function (client) {
    var info = client.page.hp.validation.blank_posting_info();
    info.contact_info();
    info.expect.element('@name').to.have.value.that.equals('');
    info.expect.element('@phone').to.have.value.that.equals('');

    client.expect.element('input[name=contactEmail]').to.have.value.that.equals('v-kevinwo@zillowgroup.com');
  },

  '[11] - Post a listing: No Photos' : function (client) {
    var upload = client.page.hp.validation.blank_posting_info();
    upload.upload_photo();
    client.pause(1000);
  },

  '[12] - Save button should now be enabled' : function (client) {
    var save = client.page.hp.posting_info();
    save.expect.element('@save').to.be.enabled;
    client.pause(1000);
  },

  '[13] - Clicking on Activate should throw errors' : function (client) {
    var activate = client.page.hp.posting_info();
    activate.expect.element('@active2').to.be.enabled;
    activate.click('@active2');
    activate.click('@active2');
    client.pause(1000);
  },

  '[14] - Show errors | Missing required fields:' : function (client) {
    var errors = client.page.hp.validation.blank_posting_info();
    errors.expect.element('@no_street').to.be.visible.before(3000);
    errors.expect.element('@no_city').to.be.visible;
    errors.expect.element('@no_state').to.be.visible;
    errors.expect.element('@no_zip').to.be.visible;
    errors.expect.element('@no_beds').to.be.visible;
    errors.expect.element('@no_baths').to.be.visible;
    errors.expect.element('@no_description').to.be.visible;
    errors.expect.element('@no_phone2').to.be.visible;
    errors.expect.element('@form_errors').to.be.visible;
    errors.expect.element('@error_occurred').to.be.visible;
  },

  '[15] - Post a listing: Location' : function (client) {
    var location = client.page.hp.posting_info();
    location.location_address();
    location.expect.element('@street').to.have.value.that.equals('33 Vista Rd');
    location.expect.element('@city').to.have.value.that.equals('Alameda');
    location.expect.element('@state').to.have.value.that.equals('CA');
    location.expect.element('@zip').to.have.value.that.equals('94502');
  },

  '[16] - Post a listing: Details and Description' : function (client) {
    var details = client.page.hp.posting_info();
    details.details_description();
    details.expect.element('@price').to.have.value.that.equals('$3500');
    details.expect.element('@beds').to.have.value.that.equals('3');
    details.expect.element('@baths').to.have.value.that.equals('2.5');
    details.expect.element('@description').to.have.value.that.equals('This is an awesome place!');
  },

  '[17] - Post a listing: Contact Information' : function (client) {
    var info = client.page.hp.posting_info();
    info.contact_info();
    info.expect.element('@name').to.have.value.that.equals('QA Test');
    info.expect.element('@phone').to.have.value.that.equals('(415) 555-5555');

    var phone = client.page.hp.verify_phone();
    phone.expect.element('@sms').to.be.visible;
    phone.expect.element('@phonecall').to.be.visible;
    phone.click('@sms');
    client.pause(1000);
  },

  '[18] - Post a listing: Photos' : function (client) {
    var upload = client.page.hp.posting_info();
    upload.upload_photo();
    client.pause(1000);
  },

  '[19] - Post a listing: Amenities and Rules | Amenities' : function (client) {
    var amenities = client.page.hp.amenities_rules();
    amenities.expect.element('@furnished').to.be.visible;
    amenities.click('@furnished');
    amenities.click('@furnished');
    client.pause(1000);
  },

  '[20] - Post a listing: Amenities and Rules | Laundry' : function (client) {
    var laundry = client.page.hp.amenities_rules();
    laundry.expect.element('@none').to.be.visible;
    laundry.click('@none');
    client.pause(1000);
  },

  '[21] - Post a listing: Amenities and Rules | Pets' : function (client) {
    var pets = client.page.hp.amenities_rules();
    pets.expect.element('@nopetsallowed').to.be.visible;
    pets.click('@nopetsallowed');
    client.pause(1000);
  },

  '[22] - Now saving...' : function (client) {
    var save = client.page.hp.posting_info();
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
