module.exports = {
  elements: {
    // title

    forRent: { selector: '//h1[contains(text(), "For rent: townhouse")]', locateStrategy: 'xpath' },

    roomForRent: { selector: '//h1[contains(text(), "Room for rent: house")]', locateStrategy: 'xpath' },

    // post to-do listing (left nav)

    // toDoNav: { selector: '//div[contains(text(), "Posting to-do list")]', locateStrategy: 'xpath' },

    locationNav: { selector: '//a[contains(text(), "Location")]', locateStrategy: 'xpath' },

    detailsDescriptionNav: { selector: '//a[contains(text(), "Details and Description")]', locateStrategy: 'xpath' },

    amenitiesAndRulesNav: { selector: '//a[contains(text(), "Amenities and Rules")]', locateStrategy: 'xpath' },

    photosNav: { selector: '//a[contains(text(), "Photos")]', locateStrategy: 'xpath' },

    contactInfoNav: { selector: '//a[contains(text(), "Contact Information")]', locateStrategy: 'xpath' },

    //location

    // locationHeader: { selector: '//div[contains(text(), "Location")]', locateStrategy: 'xpath' },

    street: { selector: 'input[name=street]', locateStrategy: 'css' },

    city: { selector: 'input[name=city]', locateStrategy: 'css' },

    state: { selector: 'select[name=state]', locateStrategy: 'css' },

    zip: { selector: 'input[name=zip]', locateStrategy: 'css' },

    //details & description

    // detailsDescriptionHeader: { selector: '//div[contains(text(), "Details and description")]', locateStrategy: 'xpath' },

    price: { selector: 'input[name=price]', locateStrategy: 'css' },

    beds: { selector: 'select[name=beds]', locateStrategy: 'css' },

    baths: { selector: 'input[name=baths]', locateStrategy: 'css' },

    description: { selector: 'textarea[name=description]', locateStrategy: 'css' },

    copy1: { selector: '//strong[contains(text(), "• Beds/baths")]', locateStrategy: 'xpath' },

    copy2: { selector: '//strong[contains(text(), "• Square footage")]', locateStrategy: 'xpath' },

    //contact information

    // contactInfoHeader: { selector: '//div[contains(text(), "Contact information")]', locateStrategy: 'xpath' },

    name: { selector: 'input[name=contactName]', locateStrategy: 'css' },

    phone: { selector: 'input[name=contactPhone]', locateStrategy: 'css' },

    //photo upload

    // photosHeader: { selector: '//div[contains(text(), "Photos")]', locateStrategy: 'xpath' },

    photos: { selector: 'input[type=file]', locateStrategy: 'css' },

    //save button

    save: { selector: '//button[contains(text(), "Save listing")]', locateStrategy: 'xpath' },

    //activate button

    active: { selector: '//button[contains(text(), "Activate listing")]', locateStrategy: 'xpath' },

    //form has errors

    formErrors: { selector: '//div[contains(text(), "Please fix any errors above before activating your listing.")]', locateStrategy: 'xpath' },

    errorOccurred: { selector: '//div[contains(text(), "An error occurred.")]', locateStrategy: 'xpath' },

    noStreet: { selector: '//span[contains(text(), "Please enter your street address.")]', locateStrategy: 'xpath' },

    noCity: { selector: '//span[contains(text(), "Please enter your city.")]', locateStrategy: 'xpath' },

    noState: { selector: '//span[contains(text(), "Please enter your state.")]', locateStrategy: 'xpath' },

    noZip: { selector: '//span[contains(text(), "Please enter your zip code.")]', locateStrategy: 'xpath' },

    noBeds: { selector: '//span[contains(text(), "Please enter the number of bedrooms")]', locateStrategy: 'xpath' },

    noBaths: { selector: '//span[contains(text(), "Please enter the number of bathrooms")]', locateStrategy: 'xpath' },

    noDescription: { selector: '//span[contains(text(), "Please provide a description.")]', locateStrategy: 'xpath' },

    noPhone1: { selector: '//span[contains(text(), "Please enter a valid 10 digit phone number.")]', locateStrategy: 'xpath' },

    noPhone2: { selector: '//span[contains(text(), "Please enter your phone number.")]', locateStrategy: 'xpath' },

  },
  commands: [{
    locationAddress: function() {
      return this.setValue('@street', '')
                 .setValue('@city', '')
                 .setValue('@state', '')
                 .setValue('@zip', '')
    },
    detailsDescription: function() {
      return this.setValue('@price', '')
                 .setValue('@beds', '')
                 .setValue('@baths', '')
                 .setValue('@description', '')
    },
    contactInfo: function() {
      return this.setValue('@name', '')
                 .setValue('@phone', '')
    },
    uploadPhoto: function() {
      return this.setValue('@photos', require('path').resolve('/Users/kevinwo/Documents/zrm/test_photos/fail.jpg'))
    }
  }]
};
