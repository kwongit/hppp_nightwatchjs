/* jshint expr: true */
module.exports = {
  '[00] - Edit Listing | https://hotpads.com/user/edit-listing/1609897' : function (client) {
    client
      .url('https://hotpads.com/user/edit-listing/1609897')
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

  '[05] - Save button should be disabled' : function (client) {
    client.pause(2000);

    var save = client.page.hp.validation.blank_posting_info();
    save.expect.element('@save').to.not.be.enabled;
    client.pause(1000);
  },

  '[07] - Post a listing: No Details and Description' : function (client) {
    var details = client.page.hp.validation.blank_posting_info();
    details.expect.element('@copy1').to.be.visible;
    details.expect.element('@copy2').to.be.visible;
  },

  '[08] - Post a listing: No Contact Information' : function (client) {
    var info = client.page.hp.validation.blank_posting_info();
    client.expect.element('input[name=contactEmail]').to.have.value.that.equals('v-kevinwo@zillowgroup.com');
  },

  '[10] - Save button should now be enabled' : function (client) {
    var save = client.page.hp.posting_info();
    save.expect.element('@save').to.be.enabled;
    client.pause(1000);
  },

  'Return \'{URL}\':' : function (client) {
    client.url(function(result) {
      console.log(result);
    });
  },
};
