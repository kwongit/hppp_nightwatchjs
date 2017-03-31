module.exports = {
  elements: {
    forrent: { selector: '//div[contains(@id, "property-for-rent")]', locateStrategy: 'xpath' },
    r4r: { selector: '//div[contains(text(), "Room for rent")]', locateStrategy: 'xpath' },
    others: { selector: '//a[contains(text(), "here.")]', locateStrategy: 'xpath' },

    // Copy
    posting: { selector: '//span[contains(text(), "Posting your home, made easy!")]', locateStrategy: 'xpath' },
    select: { selector: '//div[contains(text(), "Select your listing type:")]', locateStrategy: 'xpath' },
    view: { selector: '//div[contains(text(), "View your other listings ")]', locateStrategy: 'xpath' },
  }
};
