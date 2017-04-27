module.exports = {
  elements: {
    // --- Login page ---

    signInRegisterCopy: { selector: '//h1[contains(text(), "Sign in / register")]', locateStrategy: 'xpath' },
    emailField: { selector: 'input[name=email]', locateStrategy: 'css' },
    passwordField: { selector: 'input[name=password]', locateStrategy: 'css' },
    continueButton: { selector: '//button[contains(text(), "Continue")]', locateStrategy: 'xpath' },
    signInButton: { selector: '//button[contains(text(), "Sign in")]', locateStrategy: 'xpath' },

    // --- Form has errors ---

    noEmail: { selector: '//span[contains(text(), "Please enter a valid email address.")]', locateStrategy: 'xpath' },
    noPassword: { selector: '//span[contains(text(), "Please enter a password.")]', locateStrategy: 'xpath' },
    badPassword: { selector: '//span[contains(text(), "We did not find a user matching these credentials. Please try again.")]', locateStrategy: 'xpath' },

    // --- My Listings Page ---

    listingsFound: { selector: 'div[class=entryTitle]', locateStrategy: 'css' },
    deleteListing: { selector: '//a[contains(text(), "[ Delete listing ]")]', locateStrategy: 'xpath' },
    yesButton: { selector: '//button[contains(text(), "Yes")]', locateStrategy: 'xpath' },

    // --- Forgot password modals ---

    forgotPasswordLink: { selector: '//a[contains(text(), "Forgot your password?")]', locateStrategy: 'xpath' },
    forgotPasswordTitle: { selector: '//h1[contains(text(), "Forgotten password?")]', locateStrategy: 'xpath' },
    enterEmailCopy: { selector: '//p[contains(text(), "Enter your email and we\'ll send you instructions to reset it.")]', locateStrategy: 'xpath' },
    checkSpamCopy: { selector: '//span[contains(text(), "Make sure to check your spam folder.")]', locateStrategy: 'xpath' },
    submitButton: { selector: '//button[contains(text(), "Submit")]', locateStrategy: 'xpath' },
    checkEmailTitle: { selector: '//h1[contains(text(), "Check your email!")]', locateStrategy: 'xpath' },
    sentEmailCopy: { selector: '//p[contains(text(), " We sent an email to ")]', locateStrategy: 'xpath' },
    verifyEmail: { selector: '//div[contains(text(), "v-kevinwo@hotpads.com")]', locateStrategy: 'xpath' },
    followCopy: { selector: '//span[contains(text(), "Follow the instructions to reset your password. Check your spam folder if you don\'t see it within a minute!")]', locateStrategy: 'xpath' },

  },

    commands: [{

    inputEmail: function() {
      return this.setValue('@emailField', 'v-kevinwo@hotpads.com')
                 .click('@continueButton');
    },
    noEmail: function() {
      return this.click('@continueButton');
    },
    inputPassword: function() {
      return this.setValue('@passwordField', 'Zillow1234!')
                 .click('@signInButton');
    },
    noPassword: function() {
      return this.click('@signInButton');
    },
    inputBadPassword: function() {
      return this.setValue('@passwordField', 'test')
                 .click('@signInButton');
    },
    clickListing: function() {
        return this.click('@listingsFound');
    },
    deleteListing: function() {
        return this.click('@deleteListing');
    },
    deleteYes: function() {
        return this.click('@yesButton');
    },
  }]
};
