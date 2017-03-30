module.exports = {
  elements: {
    emailField: { selector: 'input[name=email]', locateStrategy: 'css' },

    passwordField: { selector: 'input[name=password]', locateStrategy: 'css' },

    continue: { selector: '//button[contains(text(), "Continue")]', locateStrategy: 'xpath' },

    signin: { selector: '//a[contains(text(), "Forgot your password?")]', locateStrategy: 'xpath' },

    forgot_password: { selector: '//a[contains(text(), "Forgot your password?")]', locateStrategy: 'xpath' },

    forgot_page1: { selector: '//h1[contains(text(), "Forgotten password?")]', locateStrategy: 'xpath' },

    forgot_page2: { selector: '//p[contains(text(), "Enter your email and we\'ll send you instructions to reset it.")]', locateStrategy: 'xpath' },

    forgot_page3: { selector: '//span[contains(text(), "Make sure to check your spam folder.")]', locateStrategy: 'xpath' },

    forgot_button: { selector: '//button[contains(text(), "Submit")]', locateStrategy: 'xpath' },

    //form has errors

    no_email: { selector: '//span[contains(text(), "Please enter a valid email address.")]', locateStrategy: 'xpath' },

    no_password: { selector: '//span[contains(text(), "Please enter a password.")]', locateStrategy: 'xpath' },

    bad_password: { selector: '//span[contains(text(), "We did not find a user matching these credentials. Please try again.")]', locateStrategy: 'xpath' },
  },
  commands: [{
    email: function() {
      return this.setValue('@emailField', 'v-kevinwo@zillowgroup.com')
                 .click('@continue');
    },
    no_email: function() {
      return this.click('@continue');
    },
    password: function() {
      return this.setValue('@passwordField', 'test123')
                 .click('@signin');
    },
    no_password: function() {
      return this.click('@signin');
    },
    bad_password: function() {
      return this.setValue('@passwordField', 'test')
                 .click('@signin');
    },
  }]
};
