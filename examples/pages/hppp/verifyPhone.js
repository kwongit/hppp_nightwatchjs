module.exports = {
  elements: {
    sms: { selector: '//button[contains(text(), "SMS")]', locateStrategy: 'xpath' },

    phoneCall: { selector: '//button[contains(text(), "Phone Call")]', locateStrategy: 'xpath' }
  }
};
