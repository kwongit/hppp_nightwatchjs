module.exports = {
  elements: {
    login: { selector: '//h1[contains(text(), "Sign in / register")]', locateStrategy: 'xpath' },

    emailField: { selector: 'input[name=email]', locateStrategy: 'css' },

    passwordField: { selector: 'input[name=password]', locateStrategy: 'css' },

    continue: { selector: '//button[contains(text(), "Continue")]', locateStrategy: 'xpath' },

    signIn: { selector: '//button[contains(text(), "Sign in")]', locateStrategy: 'xpath' },

    //form has errors

    noEmail: { selector: '//span[contains(text(), "Please enter a valid email address.")]', locateStrategy: 'xpath' },

    noPassword: { selector: '//span[contains(text(), "Please enter a password.")]', locateStrategy: 'xpath' },

    badPassword: { selector: '//span[contains(text(), "We did not find a user matching these credentials. Please try again.")]', locateStrategy: 'xpath' },
  },
  commands: [{
    email: function() {
      return this.setValue('@emailField', 'v-kevinwo@hotpads.com')
                 .click('@continue');
    },
    noEmail: function() {
      return this.click('@continue');
    },
    password: function() {
      return this.setValue('@passwordField', 'Zillow1234!')
                 .click('@signIn');
    },
    noPassword: function() {
      return this.click('@signIn');
    },
    badPassword: function() {
      return this.setValue('@passwordField', 'test')
                 .click('@signIn');
    },
  }]
};
