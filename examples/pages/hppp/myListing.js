module.exports = {
  elements: {
    listingsFound: { selector: 'div[class=entryTitle]', locateStrategy: 'css' },

    deleteListing: { selector: '//a[contains(text(), "[ Delete listing ]")]', locateStrategy: 'xpath' },

    yesButton: { selector: '//button[contains(text(), "Yes")]', locateStrategy: 'xpath' },
  },
  commands: [{
    clickListing: function() {
      return this.click('@listingsFound');
    },
    deleteListing: function() {
      return this.click('@delete');
    },
    deleteYes: function() {
      return this.click('@yesButton');
    },
  }]
};
