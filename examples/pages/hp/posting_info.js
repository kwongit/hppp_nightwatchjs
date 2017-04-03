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
    active1: { selector: '//button[contains(text(), "Activate listing")]', locateStrategy: 'xpath' },
    active2: { selector: '//button[contains(text(), "Activate Listing")]', locateStrategy: 'xpath' },
  },
  commands: [{
    location_address: function() {
      return this.setValue('@street', '33 Vista Rd')
                 .setValue('@city', 'Alameda')
                 .setValue('@state', 'CA')
                 .setValue('@zip', '94502')
    },
    clear_location: function() {
      return this.clearValue('@street')
                 .setValue('@street', '3026 Alta Vista')
                 .clearValue('@city')
                 .setValue('@city', 'Alameda')
                 .clearValue('@state')
                 .setValue('@state', 'CA')
                 .clearValue('@zip')
                 .setValue('@zip', '94502')
    },
    details_description: function() {
      return this.setValue('@price', '3500')
                 .setValue('@beds', '3')
                 .setValue('@baths', '2.5')
                 .setValue('@description', 'This is an awesome place!')
    },
    clear_details: function() {
      return this.clearValue('@price')
                 .setValue('@price', '3650')
                 .clearValue('@beds')
                 .setValue('@beds', '3')
                 .clearValue('@baths')
                 .setValue('@baths', '2.5')
                 .clearValue('@description')
                 .setValue('@description', 'This is an awesome!')
    },
    contact_info: function() {
      return this.setValue('@name', 'QA Test')
                 .setValue('@phone', '415-555-5555')
    },
    clear_contact: function() {
      return this.clearValue('@name')
                 .setValue('@name', 'Tester')
                 .clearValue('@phone')
                 .setValue('@phone', '415-444-4444')
    },
    upload_photo: function() {
      return this.setValue('@photos', require('path').resolve('/Users/kevinwo/Documents/zrm/test_photos/canaima_venezuela.jpg'))
    }
  }]
};
