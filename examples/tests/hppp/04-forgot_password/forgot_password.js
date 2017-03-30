/* jshint expr: true */
module.exports = {
  '[00] - Click on CTA button: Post a listing' : function (client) {
    client
      .url('https://hotpads.com/')
      .pause(1000);

    var cta = client.page.hp.landing_page();
    cta.click('@post_a_listing_btn');
    client.pause(1000);
  },

  '[01] - Enter email:' : function (client) {
    var login = client.page.hp.login();
    login.email();
    client.pause(1000);
  },

  '[02] - Forgot password:' : function (client) {
    var forgot = client.page.hp.login();
    forgot.click('@forgot_password');
    client.pause(1000);
  },

  '[03] - Forgot password page:' : function (client) {
    var forgot = client.page.hp.forgot();
    forgot.expect.element('@forgot_page1').to.be.present;
    forgot.expect.element('@forgot_page2').to.be.present;
    forgot.expect.element('@forgot_page3').to.be.present;
    forgot.expect.element('@forgot_button').to.be.present;
    forgot.click('@forgot_button');
    client.pause(1000);
  },

  '[04] - Check your email page:' : function (client) {
    var check = client.page.hp.forgot();
    check.expect.element('@check_email').to.be.present;
    check.expect.element('@sent_email').to.be.present;
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
