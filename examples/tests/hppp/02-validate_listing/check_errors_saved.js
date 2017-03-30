/* jshint expr: true */
module.exports = {
  '[00] - Edit Listing | https://hotpads.com/user/edit-listing/1608083' : function (client) {
    client
      .url('https://hotpads.com/user/edit-listing/1608083')
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
    login.expect.element('@bad_password').to.be.visible;
    login.password();
    login.expect.element('@passwordField').to.have.value.that.equals('test123');
    client.pause(1000);
  },

  '[05] - Save button should be disabled' : function (client) {
    client.pause(2000);

    var save = client.page.hp.validation.blank_posting_info();
    save.expect.element('@save').to.not.be.enabled;
    client.pause(1000);
  },

  '[06] - Post a listing: No Location' : function (client) {
    var location = client.page.hp.validation.blank_posting_info();
    location.location_address();
    location.expect.element('@street').to.have.value.that.equals('');
    location.expect.element('@city').to.have.value.that.equals('');
    location.expect.element('@state').to.have.value.that.equals('');
    location.expect.element('@zip').to.have.value.that.equals('');
  },

  '[07] - Post a listing: No Details and Description' : function (client) {
    var details = client.page.hp.validation.blank_posting_info();
    details.details_description();
    details.expect.element('@price').to.have.value.that.equals('');
    details.expect.element('@beds').to.have.value.that.equals('');
    details.expect.element('@baths').to.have.value.that.equals('');
    details.expect.element('@description').to.have.value.that.equals('');
  },

  '[08] - Post a listing: No Contact Information' : function (client) {
    var info = client.page.hp.validation.blank_posting_info();
    info.contact_info();
    info.expect.element('@name').to.have.value.that.equals('');
    info.expect.element('@phone').to.have.value.that.equals('');

    client.expect.element('input[name=contactEmail]').to.have.value.that.equals('v-kevinwo@zillowgroup.com');
  },

  '[09] - Post a listing: No Photos' : function (client) {
    var upload = client.page.hp.validation.blank_posting_info();
    upload.upload_photo();
    client.pause(1000);
  },

  '[10] - Save button should now be enabled' : function (client) {
    var save = client.page.hp.posting_info();
    save.expect.element('@save').to.be.enabled;
    client.pause(1000);
  },

  '[11] - Clicking on Activate should throw errors' : function (client) {
    var activate = client.page.hp.posting_info();
    activate.expect.element('@active').to.be.enabled;
    activate.click('@active');
    activate.click('@active');
    client.pause(1000);
  },

  '[12] - Show errors | Missing required fields:' : function (client) {
    var errors = client.page.hp.validation.blank_posting_info();
    errors.expect.element('@no_street').to.be.visible.before(3000);
    errors.expect.element('@no_city').to.be.visible;
    errors.expect.element('@no_state').to.be.visible;
    errors.expect.element('@no_zip').to.be.visible;
    errors.expect.element('@no_beds').to.be.visible;
    errors.expect.element('@no_baths').to.be.visible;
    errors.expect.element('@no_description').to.be.visible;
    errors.expect.element('@no_phone').to.be.visible;
    errors.expect.element('@form_errors').to.be.visible;
    errors.expect.element('@error_occurred').to.be.visible;
  },

  'Return \'{URL}\':' : function (client) {
    client.url(function(result) {
      console.log(result);
    });
  },
};
