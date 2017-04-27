module.exports = {
  elements: {
    // --- Rental Manager Homepage ---

    welcomeToHotPadsRentalManager: { selector: '//h1[contains(text(), "Welcome to hotpads Rental Manager")]', locateStrategy: 'xpath' },
    postToHotPads: { selector: '//a[contains(text(), "Post to ")]', locateStrategy: 'xpath' },
    myListings: { selector: '//a[contains(text(), "My listings")]', locateStrategy: 'xpath' },
    backToHotPads: { selector: '//a[contains(text(), "Back to ")]', locateStrategy: 'xpath' },
    emailNav: { selector: '//a[contains(text(), "v-kevinwo@hotpads.com")]', locateStrategy: 'xpath' },

    // --- Select your listing type: ---

    selectForRent: { selector: '//div[contains(@id, "property-for-rent")]', locateStrategy: 'xpath' },
    selectRoomForRent: { selector: '//div[contains(text(), "Room for rent")]', locateStrategy: 'xpath' },
    viewOtherListings: { selector: '//a[contains(text(), "here.")]', locateStrategy: 'xpath' },
    postingHeaderCopy: { selector: '//span[contains(text(), "Posting your home, made easy!")]', locateStrategy: 'xpath' },
    selectYourListingTypeCopy: { selector: '//div[contains(text(), "Select your listing type:")]', locateStrategy: 'xpath' },
    viewOtherListingsCopy: { selector: '//div[contains(text(), "View your other listings ")]', locateStrategy: 'xpath' },

    // --- Select your property type: ---

    selectYourPropertyTypeCopy: { selector: '//div[contains(text(), "Select your property type:")]', locateStrategy: 'xpath' },
    house: { selector: '//button[contains(text(), "House")]', locateStrategy: 'xpath' },
    townhouse: { selector: '//button[contains(text(), "Townhouse")]', locateStrategy: 'xpath' },
    condo: { selector: '//button[contains(text(), "Condo / Apartment Unit")]', locateStrategy: 'xpath' },
    apartment: { selector: '//button[contains(text(), "Apartment Community")]', locateStrategy: 'xpath' },
    goBackLink: { selector: '//a[contains(text(), "< Go Back")]', locateStrategy: 'xpath' },
    numberOfUnits: { selector: 'input[name=numberUnits]', locateStrategy: 'css' },
    totalUnitsCopy: { selector: '//div[contains(text(), "Total number of units in this apartment community?")]', locateStrategy: 'xpath' },
    invalidNumberCopy: { selector: '//span[contains(text(), "Please enter a valid number of units")]', locateStrategy: 'xpath' },
    continueButton: { selector: '//button[contains(text(), "Continue")]', locateStrategy: 'xpath' },

    // --- Titles ---
    forRentTownhouseTitle: { selector: '//h1[contains(text(), "For rent: townhouse")]', locateStrategy: 'xpath' },
    forRentApartmentTitle: { selector: '//h1[contains(text(), "For rent: apartment community")]', locateStrategy: 'xpath' },
    roomForRentHouseTitle: { selector: '//h1[contains(text(), "Room for rent: house")]', locateStrategy: 'xpath' },

    // --- Left-nav menu ---

    locationNav: { selector: '//a[contains(text(), "Location")]', locateStrategy: 'xpath' },
    buildingDetailsNav: { selector: '//a[contains(text(), "Building Details")]', locateStrategy: 'xpath' },
    buildingPhotosNav: { selector: '//a[contains(text(), "Building Photos")]', locateStrategy: 'xpath' },
    communityAmenitiesNav: { selector: '//a[contains(text(), "Community Amenities")]', locateStrategy: 'xpath' },
    unitAmenitiesNav: { selector: '//a[contains(text(), "Unit Amenities")]', locateStrategy: 'xpath' },
    floorplansNav: { selector: '//a[contains(text(), "Floorplans")]', locateStrategy: 'xpath' },
    contactInfoNav: { selector: '//a[contains(text(), "Contact Information")]', locateStrategy: 'xpath' },
    amenitiesAndRulesNav: { selector: '//a[contains(text(), "Amenities and Rules")]', locateStrategy: 'xpath' },
    detailsDescriptionNav: { selector: '//a[contains(text(), "Details and Description")]', locateStrategy: 'xpath' },
    photosNav: { selector: '//a[contains(text(), "Photos")]', locateStrategy: 'xpath' },

    // --- Location ---

    street: { selector: 'input[name=street]', locateStrategy: 'css' },
    city: { selector: 'input[name=city]', locateStrategy: 'css' },
    state: { selector: 'select[name=state]', locateStrategy: 'css' },
    zip: { selector: 'input[name=zip]', locateStrategy: 'css' },

    // --- Building details ---

    listingTitle: { selector: 'input[name=listingTitle]', locateStrategy: 'css' },
    propertyDescription: { selector: 'textarea[name=description]', locateStrategy: 'css' },
    leaseTerms: { selector: 'input[name=leaseTerms]', locateStrategy: 'css' },
    propertyLogo: { selector: '//span[contains(text(), "Property Logo")]', locateStrategy: 'xpath' },
    removeLogoButton: { selector: '//button[contains(text(), "Remove Logo")]', locateStrategy: 'xpath' },
    websiteUrl: { selector: 'input[name=website]', locateStrategy: 'css' },
    sundayHours: { selector: 'input[name=contactSunday]', locateStrategy: 'css' },
    mondayHours: { selector: 'input[name=contactMonday]', locateStrategy: 'css' },
    tuesdayHours: { selector: 'input[name=contactTuesday]', locateStrategy: 'css' },
    wednesdayHours: { selector: 'input[name=contactWednesday]', locateStrategy: 'css' },
    thursdayHours: { selector: 'input[name=contactThursday]', locateStrategy: 'css' },
    fridayHours: { selector: 'input[name=contactFriday]', locateStrategy: 'css' },
    saturdayHours: { selector: 'input[name=contactSaturday]', locateStrategy: 'css' },

    // --- Floorplan details ---

    floorplanName: { selector: 'input[name=name]', locateStrategy: 'css' },
    beds: { selector: 'select[name=beds]', locateStrategy: 'css' },
    baths: { selector: 'input[name=baths]', locateStrategy: 'css' },
    price: { selector: 'input[name=price]', locateStrategy: 'css' },
    expandAllFloorplans: { selector: '//a[contains(text(), "Expand All Floorplans")]', locateStrategy: 'xpath' },
    expandFloorplanPhotos: { selector: '//div[contains(text(), "Floorplan Photos")]', locateStrategy: 'xpath' },
    floorplanLayoutButton: { selector: '//span[contains(text(), "Layout / Floorplan")]', locateStrategy: 'xpath' },
    floorplanLayoutPhotos: { selector: '//span[contains(text(), "Photos")]', locateStrategy: 'xpath' },

    // --- Contact information ---

    name: { selector: 'input[name=contactName]', locateStrategy: 'css' },
    phone: { selector: 'input[name=contactPhone]', locateStrategy: 'css' },
    fax: { selector: 'input[name=contactFax]', locateStrategy: 'css' },
    cc: { selector: 'input[name=ccToEmail]', locateStrategy: 'css' },

    // --- Building photos ---

    photos: { selector: 'input[type=file]', locateStrategy: 'css' },

    // --- Community amenities and rules | Amenities ---

    amenitiesHeader: { selector: '//div[contains(text(), "Amenities (optional)")]', locateStrategy: 'xpath' },
    ac: { selector: '//span[contains(text(), "A/C")]', locateStrategy: 'xpath' },
    balcony: { selector: '//span[contains(text(), "Balcony / Deck")]', locateStrategy: 'xpath' },
    furnished: { selector: '//span[contains(text(), "Furnished")]', locateStrategy: 'xpath' },
    hardwoodFloor: { selector: '//span[contains(text(), "Hardwood Floor")]', locateStrategy: 'xpath' },
    wheelchairAccess: { selector: '//span[contains(text(), "Wheelchair Access")]', locateStrategy: 'xpath' },
    garageParking: { selector: '//span[contains(text(), "Garage Parking")]', locateStrategy: 'xpath' },
    offstreetParking: { selector: '//span[contains(text(), "Off-street Parking")]', locateStrategy: 'xpath' },

    // --- Community amenities and rules | Laundry ---

    laundryHeader: { selector: '//div[contains(text(), "Laundry")]', locateStrategy: 'xpath' },
    none: { selector: '//span[contains(text(), "None")]', locateStrategy: 'xpath' },
    inUnit: { selector: '//span[contains(text(), "In unit")]', locateStrategy: 'xpath' },
    shared: { selector: '//span[contains(text(), "Shared / in-building")]', locateStrategy: 'xpath' },

    // --- Community amenities and rules | Pets ---

    petsHeader: { selector: '//div[contains(text(), "Pets")]', locateStrategy: 'xpath' },
    noPetsAllowed: { selector: '//span[contains(text(), "No pets allowed")]', locateStrategy: 'xpath' },
    cats: { selector: '//span[contains(text(), "Cats ok")]', locateStrategy: 'xpath' },
    smallDogs: { selector: '//span[contains(text(), "Small dogs ok")]', locateStrategy: 'xpath' },
    largeDogs: { selector: '//span[contains(text(), "Large dogs ok")]', locateStrategy: 'xpath' },

    // --- Additional amenities ---

    additionalAmenities: { selector: 'input[placeholder="List other amenities available"]', locateStrategy: 'css'},
    unitAmenities: { selector: 'input[placeholder="List amenities found in units"]', locateStrategy: 'css'},

    // --- Buttons ---

    addAmenityButton: { selector: '//button[contains(text(), "+ Add Amenity")]', locateStrategy: 'xpath' },
    saveListingButton: { selector: '//button[contains(text(), "Save listing")]', locateStrategy: 'xpath' },
    activeListingButton: { selector: '//button[contains(text(), "Activate Listing")]', locateStrategy: 'xpath' },

    // --- Error message copy ---

    formErrors: { selector: '//div[contains(text(), "Please fix any errors above before activating your listing.")]', locateStrategy: 'xpath' },
    errorOccurred: { selector: '//div[contains(text(), "An error occurred.")]', locateStrategy: 'xpath' },
    noStreet: { selector: '//span[contains(text(), "Please enter your street address.")]', locateStrategy: 'xpath' },
    noCity: { selector: '//span[contains(text(), "Please enter your city.")]', locateStrategy: 'xpath' },
    noState: { selector: '//span[contains(text(), "Please enter your state.")]', locateStrategy: 'xpath' },
    noZip: { selector: '//span[contains(text(), "Please enter your zip code.")]', locateStrategy: 'xpath' },
    noListingTitle: { selector: '//span[contains(text(), "Please enter the property name.")]', locateStrategy: 'xpath' },
    noPropertyDescription: { selector: '//span[contains(text(), "Please provide a description.")]', locateStrategy: 'xpath' },
    noBeds: { selector: '//span[contains(text(), "Please enter the number of bedrooms")]', locateStrategy: 'xpath' },
    noBaths: { selector: '//span[contains(text(), "Please enter the number of bathrooms")]', locateStrategy: 'xpath' },
    noPhoneNumber1: { selector: '//span[contains(text(), "Please enter a valid 10 digit phone number.")]', locateStrategy: 'xpath' },
    noPhoneNumber2: { selector: '//span[contains(text(), "Please enter your phone number.")]', locateStrategy: 'xpath' },
  },

    commands: [{

    inputValidUnits: function() {
      return this.setValue('@numberOfUnits', '50')
                 .click('@continueButton');
    },
    inputInvalidUnits: function() {
      return this.setValue('@numberOfUnits', '1')
                 .click('@continueButton');
    },
    noLocationAddress: function() {
      return this.setValue('@street', '')
    },
    locationAddress: function() {
      return this.setValue('@street', '33 Vista Rd')
                 .setValue('@city', 'Alameda')
                 .setValue('@state', 'CA')
                 .setValue('@zip', '94502')
    },
    clearLocation: function() {
      return this.clearValue('@street')
                 .setValue('@street', '3026 Alta Vista')
                 .clearValue('@city')
                 .setValue('@city', 'Alameda')
                 .clearValue('@state')
                 .setValue('@state', 'CA')
                 .clearValue('@zip')
                 .setValue('@zip', '94502')
    },
    buildingDetails: function() {
      return this.setValue('@listingTitle', 'Test listing title')
                 .setValue('@propertyDescription', 'This is an awesome place!')
                 .setValue('@leaseTerms', 'Month-to-month')
                 .setValue('@websiteUrl', 'hotpads.com')
                 .setValue('@sundayHours', '10-6p')
                 .setValue('@mondayHours', '10-6p')
                 .setValue('@tuesdayHours', '10-6p')
                 .setValue('@wednesdayHours', '10-6p')
                 .setValue('@thursdayHours', '10-6p')
                 .setValue('@fridayHours', '10-6p')
                 .setValue('@saturdayHours', '10-6p')
    },
    uploadPropertyPhoto: function() {
        return this.setValue('@propertyLogo', require('path').resolve('/Users/kevinwo/Documents/zrm/test_photos/bewaresign.jpeg'))
    },
    floorplanDetails: function() {
      return this.setValue('@floorplanName', 'Test floorplan name')
                 .setValue('@beds', '3')
                 .setValue('@baths', '2.5')
                 .setValue('@price', '7500')
                 .click('@expandAllFloorplans')
                 .click('@expandFloorplanPhotos')
    },
    uploadfloorplanLayoutPhoto: function() {
      return this.setValue('@floorplanLayoutButton', require('path').resolve('/Users/kevinwo/Documents/zrm/test_photos/bewaresign.jpeg'))
    },
    uploadfloorplanPhotosPhoto: function() {
      return this.setValue('@floorplanLayoutPhotos', require('path').resolve('/Users/kevinwo/Documents/zrm/test_photos/bewaresign.jpeg'))
    },
    clearDetails: function() {
      return this.clearValue('@price')
                 .setValue('@price', '3650')
                 .clearValue('@beds')
                 .setValue('@beds', '3')
                 .clearValue('@baths')
                 .setValue('@baths', '2.5')
                 .clearValue('@description')
                 .setValue('@description', 'This is an awesome!')
    },
    contactInfo: function() {
      return this.setValue('@name', 'QA Test')
                 .setValue('@phone', '415-555-5555')
                 .setValue('@fax', '415-444-4444')
                 .setValue('@cc', 'qa@zrm.com')
    },
    clearContact: function() {
      return this.clearValue('@name')
                 .setValue('@name', 'Tester')
                 .clearValue('@phone')
                 .setValue('@phone', '415-444-4444')
    },
    uploadBuildingPhoto: function() {
      return this.setValue('@photos', require('path').resolve('/Users/kevinwo/Documents/zrm/test_photos/canaima_venezuela.jpg'))
    },
    addUnitAmenities: function() {
      return this.setValue('@unitAmenities', 'testing')
                 .click('@addAmenityButton')
    }
  }]
};
