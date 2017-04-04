module.exports = {
  elements: {
    forgotPassword: { selector: '//a[contains(text(), "Forgot your password?")]', locateStrategy: 'xpath' },

    forgotPassword1: { selector: '//h1[contains(text(), "Forgotten password?")]', locateStrategy: 'xpath' },

    forgotPassword2: { selector: '//p[contains(text(), "Enter your email and we\'ll send you instructions to reset it.")]', locateStrategy: 'xpath' },

    forgotPassword3: { selector: '//span[contains(text(), "Make sure to check your spam folder.")]', locateStrategy: 'xpath' },

    forgotPasswordButton: { selector: '//button[contains(text(), "Submit")]', locateStrategy: 'xpath' },

    checkEmail: { selector: '//h1[contains(text(), "Check your email!")]', locateStrategy: 'xpath' },

    sentEmail: { selector: '//p[contains(text(), " We sent an email to ")]', locateStrategy: 'xpath' },

    email: { selector: '//div[contains(text(), "v-kevinwo@zillowgroup.com")]', locateStrategy: 'xpath' },

    follow: { selector: '//p[contains(text(), "Follow the instructions to reset your password. Check your spam folder if you don\'t see it within a minute!")]', locateStrategy: 'xpath' },
  },
};
