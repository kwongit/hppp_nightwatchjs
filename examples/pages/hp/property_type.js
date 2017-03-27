module.exports = {
  elements: {
    house: { selector: '//button[contains(text(), "House")]', locateStrategy: 'xpath' },
    townhouse: { selector: '//button[contains(text(), "Townhouse")]', locateStrategy: 'xpath' },
    condo: { selector: '//button[contains(text(), "Condo / Apartment Unit")]', locateStrategy: 'xpath' },
    apartment: { selector: '//button[contains(text(), "Apartment Community")]', locateStrategy: 'xpath' }
  }
};
