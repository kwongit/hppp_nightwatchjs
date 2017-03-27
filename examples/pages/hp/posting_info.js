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
    save: { selector: '//button[contains(text(), "Save listing")]', locateStrategy: 'xpath' }, //always remember to put a comma after the 2nd to last '}'

    //activate button
    active: { selector: '//button[contains(text(), "Activate listing")]', locateStrategy: 'xpath' }
  },
  commands: [{
    location_address: function() {
      return this.setValue('@street', '33 Vista Rd')
                 .setValue('@city', 'Alameda')
                 .setValue('@state', 'CA')
                 .setValue('@zip', '94502')
    },
    details_description: function() {
      return this.setValue('@price', '3500')
                 .setValue('@beds', '3')
                 .setValue('@baths', '2.5')
                 .setValue('@description', 'This is an awesome place!')
    },
    contact_info: function() {
      return this.setValue('@name', 'QA Test')
                 .setValue('@phone', '415-555-5555')
    },
    upload_photo: function() {
      return this.setValue('@photos', require('path').resolve('/Users/kevinwo/Documents/zrm/test_photos/canaima_venezuela.jpg'))
    }
  }]
};
