module.exports = {
  elements: {
    house: { selector: '//button[contains(text(), "House")]', locateStrategy: 'xpath' },

    townhouse: { selector: '//button[contains(text(), "Townhouse")]', locateStrategy: 'xpath' },

    condo: { selector: '//button[contains(text(), "Condo / Apartment Unit")]', locateStrategy: 'xpath' },

    apartment: { selector: '//button[contains(text(), "Apartment Community")]', locateStrategy: 'xpath' },

    numberOfUnits: { selector: 'input[name=numberUnits]', locateStrategy: 'css' },

    continueButton: { selector: '//button[contains(text(), "Continue")]', locateStrategy: 'xpath' },

    // Copy

    totalUnits: { selector: '//div[contains(text(), "Total number of units in this apartment community?")]', locateStrategy: 'xpath' },

    posting: { selector: '//span[contains(text(), "Posting your home, made easy!")]', locateStrategy: 'xpath' },

    select: { selector: '//div[contains(text(), "Select your property type:")]', locateStrategy: 'xpath' },

    goBack: { selector: '//a[contains(text(), "< Go Back")]', locateStrategy: 'xpath' },
  },
  commands: [{
    inputUnits: function() {
      return this.setValue('@numberOfUnits', '100')
                 .click('@continueButton');
    },
  }]
};
