module.exports = {
  elements: {
    forgot_password: { selector: '//a[contains(text(), "Forgot your password?")]', locateStrategy: 'xpath' },

    forgot_page1: { selector: '//h1[contains(text(), "Forgotten password?")]', locateStrategy: 'xpath' },

    forgot_page2: { selector: '//p[contains(text(), "Enter your email and we\'ll send you instructions to reset it.")]', locateStrategy: 'xpath' },

    forgot_page3: { selector: '//span[contains(text(), "Make sure to check your spam folder.")]', locateStrategy: 'xpath' },

    forgot_button: { selector: '//button[contains(text(), "Submit")]', locateStrategy: 'xpath' },

    check_email: { selector: '//h1[contains(text(), "Check your email!")]', locateStrategy: 'xpath' },

    sent_email: { selector: '//p[contains(text(), " We sent an email to ")]', locateStrategy: 'xpath' },

    email: { selector: '//div[contains(text(), "v-kevinwo@zillowgroup.com")]', locateStrategy: 'xpath' },

    follow: { selector: '//p[contains(text(), "Follow the instructions to reset your password. Check your spam folder if you don\'t see it within a minute!")]', locateStrategy: 'xpath' },
  },
};
