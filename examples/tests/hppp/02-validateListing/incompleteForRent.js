/* jshint expr: true */
module.exports = {
  '[00] - Edit Listing | https://hotpads.com/user/edit-listing/1609833' : function (client) {
    client
      .url('https://hotpads.com/user/edit-listing/1609833')
      .pause(1000);
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
    details.expect.element('@copy1').to.be.visible;
    details.expect.element('@copy2').to.be.visible;
    details.detailsDescription();
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

  'Return \'{URL}\':' : function (client) {
    client.url(function(result) {
      console.log(result);
    });
  },
};
