module.exports = {
  elements: {
    emailField: { selector: 'input[name=email]', locateStrategy: 'css' },
    passwordField: { selector: 'input[name=password]', locateStrategy: 'css' },
    continue: { selector: '//button[contains(text(), "Continue")]', locateStrategy: 'xpath' },
    signin: { selector: '//button[contains(text(), "Sign in")]', locateStrategy: 'xpath' }
  },
  commands: [{
    email: function() {
      return this.setValue('@emailField', 'v-kevinwo@zillowgroup.com')
                 .click('@continue');
    },
    password: function() {
      return this.setValue('@passwordField', 'test123')
                 .click('@signin');
    }
  }]
};
