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

  '[02] - Enter password:' : function (client) {
    var login = client.page.hp.login();
    login.password();
    client.pause(1000);
  },

  '[03] - Click on other listings:' : function (client) {
    var others = client.page.hp.listing_type();
    others.click('@others');
    client.pause(1000);
  },

  '[04] - Verify other listings found:' : function (client) {
    client.expect.element('#listing-count').to.be.present;
  },

  'Return \'{URL}\':' : function (client) {
    client.url(function(result) {
      console.log(result);
    });
  },
};
