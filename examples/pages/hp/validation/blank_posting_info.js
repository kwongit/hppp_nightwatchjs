module.exports = {
  elements: {
    //location
    street: { selector: 'input[name=street]', locateStrategy: 'css' },
    city: { selector: 'input[name=city]', locateStrategy: 'css' },
    state: { selector: 'select[name=state]', locateStrategy: 'css' },
    zip: { selector: 'input[name=zip]', locateStrategy: 'css' },

    //details & description
    price: { selector: 'input[name=price]', locateStrategy: 'css' },
    beds: { selector: 'select[name=beds]', locateStrategy: 'css' },
    baths: { selector: 'input[name=baths]', locateStrategy: 'css' },
    description: { selector: 'textarea[name=description]', locateStrategy: 'css' },

    //contact information
    name: { selector: 'input[name=contactName]', locateStrategy: 'css' },
    phone: { selector: 'input[name=contactPhone]', locateStrategy: 'css' },

    //photo upload
    photos: { selector: 'input[type=file]', locateStrategy: 'css' },

    //save button
    save: { selector: '//button[contains(text(), "Save listing")]', locateStrategy: 'xpath' },

    //activate button
    active: { selector: '//button[contains(text(), "Activate listing")]', locateStrategy: 'xpath' },

    //form has errors
    form_errors: { selector: '//div[contains(text(), "Please fix any errors above before activating your listing.")]', locateStrategy: 'xpath' },

    error_occurred: { selector: '//div[contains(text(), "An error occurred.")]', locateStrategy: 'xpath' },

    no_street: { selector: '//span[contains(text(), "Please enter your street address.")]', locateStrategy: 'xpath' },

    no_city: { selector: '//span[contains(text(), "Please enter your city.")]', locateStrategy: 'xpath' },

    no_state: { selector: '//span[contains(text(), "Please enter your state.")]', locateStrategy: 'xpath' },

    no_zip: { selector: '//span[contains(text(), "Please enter your zip code.")]', locateStrategy: 'xpath' },

    no_beds: { selector: '//span[contains(text(), "Please enter the number of bedrooms")]', locateStrategy: 'xpath' },

    no_baths: { selector: '//span[contains(text(), "Please enter the number of bathrooms")]', locateStrategy: 'xpath' },

    no_description: { selector: '//span[contains(text(), "Please provide a description.")]', locateStrategy: 'xpath' },

    no_phone: { selector: '//span[contains(text(), "Please enter a valid 10 digit phone number.")]', locateStrategy: 'xpath' },
  },
  commands: [{
    location_address: function() {
      return this.setValue('@street', '')
                 .setValue('@city', '')
                 .setValue('@state', '')
                 .setValue('@zip', '')
    },
    details_description: function() {
      return this.setValue('@price', '')
                 .setValue('@beds', '')
                 .setValue('@baths', '')
                 .setValue('@description', '')
    },
    contact_info: function() {
      return this.setValue('@name', '')
                 .setValue('@phone', '')
    },
    upload_photo: function() {
      return this.setValue('@photos', require('path').resolve('/Users/kevinwo/Documents/zrm/test_photos/fail.jpg'))
    }
  }]
};
