module.exports = {
  elements: {
    forrent: { selector: '//div[contains(@id, "property-for-rent")]', locateStrategy: 'xpath' },
    r4r: { selector: '//div[contains(text(), "Room for rent")]', locateStrategy: 'xpath' },
    others: { selector: '//a[contains(text(), "here.")]', locateStrategy: 'xpath' }
  }
};
