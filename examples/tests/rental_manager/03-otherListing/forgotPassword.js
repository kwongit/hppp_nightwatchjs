/* jshint expr: true */
module.exports = {
  '[00] - Sign in / register | https://hotpads.com/login' : function (client) {
    client
      .url('https://hotpads.com/login')
      .pause(1000);
    var login = client.page.rental_manager.login();
    login.inputEmail();
    client.pause(1000);
  },

  '[01] - Forgot password:' : function (client) {
    var forgotPassword = client.page.rental_manager.login();
    forgotPassword.click('@forgotPasswordLink');
    client.pause(1000);
  },

  '[02] - Forgot password page:' : function (client) {
    var forgotPassword = client.page.rental_manager.login();
    forgotPassword.expect.element('@forgotPasswordTitle').to.be.present;
    forgotPassword.expect.element('@enterEmailCopy').to.be.present;
    forgotPassword.expect.element('@checkSpamCopy').to.be.present;
    forgotPassword.expect.element('@submitButton').to.be.present;
    forgotPassword.click('@submitButton');
    client.pause(3000);
  },

  '[03] - Check your email page:' : function (client) {
    var checkEmail = client.page.rental_manager.login();
    checkEmail.expect.element('@checkEmailTitle').to.be.present;
    checkEmail.expect.element('@sentEmailCopy').to.be.present;
    checkEmail.expect.element('@verifyEmail').to.be.present;
    checkEmail.expect.element('@followCopy').to.be.present;
    client.pause(1000);
  },

  'Return \'{URL}\':' : function (client) {
    client.url(function(result) {
      console.log(result);
    });
  },
};
