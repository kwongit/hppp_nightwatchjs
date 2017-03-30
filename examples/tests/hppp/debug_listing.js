/* jshint expr: true */
module.exports = {
  '[00] - Look for the CTA button: Post a listing' : function (client) {
    client
      .url('https://hotpads.com/')
      .pause(1000);

    var cta = client.page.hp.landing_page();
    cta.expect.element('@post_a_listing_btn').to.be.visible;
    cta.click('@post_a_listing_btn');
    client.pause(1000);
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
    login.password();
    login.expect.element('@passwordField').to.have.value.that.equals('test123');
    client.pause(1000);
  },
}
