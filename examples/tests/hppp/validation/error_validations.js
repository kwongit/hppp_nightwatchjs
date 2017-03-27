/* jshint expr: true */
module.exports = {
  '[00] - Debugging | https://hotpads.com/user/edit-listing/1603681' : function (client) {
    client
      .url('https://hotpads.com/user/edit-listing/1603681')
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

  '[03] - Save button should be disabled' : function (client) {
    client.pause(2000);

    var save = client.page.hp.validation.blank_posting_info();
    save.expect.element('@save').to.not.be.enabled;
    client.pause(1000);

    var location = client.page.hp.validation.blank_posting_info();
    location.location_address();
  },

  '[04] - Post a listing: Details and Description' : function (client) {
    var details = client.page.hp.validation.blank_posting_info();
    details.details_description();
  },

  '[05] - Post a listing: Contact Information' : function (client) {
    var info = client.page.hp.validation.blank_posting_info();
    info.contact_info();

    client.expect.element('input[name=contactEmail]').to.have.value.that.equals('v-kevinwo@zillowgroup.com');
  },

  '[06] - Post a listing: Photos' : function (client) {
    var upload = client.page.hp.validation.blank_posting_info();
    upload.upload_photo();
    client.pause(1000);
  },

  '[07] - Save button should be enabled' : function (client) {
    var save = client.page.hp.validation.blank_posting_info();
    save.expect.element('@save').to.be.enabled;
    client.pause(1000);
  },

  '[08] - Clicking on Activate should throw errors' : function (client) {
    var activate = client.page.hp.validation.blank_posting_info();
    activate.click('@active');
    client.pause(1000);
  },

  '[09] - Show errors | Missing required fields:' : function (client) {
    var errors = client.page.hp.validation.blank_posting_info();
    errors.expect.element('@no_street').to.be.visible;
    errors.expect.element('@no_city').to.be.visible;
    errors.expect.element('@no_state').to.be.visible;
    errors.expect.element('@no_zip').to.be.visible;
    errors.expect.element('@no_beds').to.be.visible;
    errors.expect.element('@no_baths').to.be.visible;
    errors.expect.element('@no_description').to.be.visible;
    errors.expect.element('@no_phone').to.be.visible;
    errors.expect.element('@form_errors').to.be.visible;
    errors.expect.element('@error_occurred').to.be.visible;
    client.pause(1000);
  },
};
