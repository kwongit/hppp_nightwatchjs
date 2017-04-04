/* jshint expr: true */
module.exports = {
  '[00] - Click on CTA button: Post a listing' : function (client) {
    client
      .url('https://hotpads.com/')
      .pause(1000);

    var cta = client.page.hppp.landingPage();
    cta.click('@postAListingButton');
    client.pause(1000);
  },

  '[01] - Enter email:' : function (client) {
    var login = client.page.hppp.login();
    login.email();
    client.pause(1000);
  },

  '[02] - forgotPassword password:' : function (client) {
    var forgotPassword = client.page.hppp.forgotPassword();
    forgotPassword.click('@forgotPassword');
    client.pause(1000);
  },

  '[03] - forgotPassword password page:' : function (client) {
    var forgotPassword = client.page.hppp.forgotPassword();
    forgotPassword.expect.element('@forgotPassword1').to.be.present;
    forgotPassword.expect.element('@forgotPassword2').to.be.present;
    forgotPassword.expect.element('@forgotPassword3').to.be.present;
    forgotPassword.expect.element('@forgotPasswordButton').to.be.present;
    forgotPassword.click('@forgotPasswordButton');
    client.pause(1000);
  },

  '[04] - Check your email page:' : function (client) {
    var check = client.page.hppp.forgotPassword();
    check.expect.element('@checkEmail').to.be.present;
    check.expect.element('@sentEmail').to.be.present;
    check.expect.element('@email').to.be.present;
    check.expect.element('@follow').to.be.present;
    client.pause(1000);
  },

  'Return \'{URL}\':' : function (client) {
    client.url(function(result) {
      console.log(result);
    });
  },
};
