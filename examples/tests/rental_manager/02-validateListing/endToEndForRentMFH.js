/* jshint expr: true */
module.exports = {
  '[00] - Sign in / register | https://hotpads.com/login' : function (client) {
    client
      .url('https://hotpads.com/login')
      .pause(1000);

    // var verify = client.page.rental_manager.login();
    // verify.expect.element('@login').to.be.visible;
    // verify.expect.element('@emailField').to.be.visible;
    // verify.expect.element('@continue').to.be.visible;
  },

  '[01] - Enter valid email:' : function (client) {
    var login = client.page.rental_manager.login();
    // login.noEmail();
    // login.expect.element('@noEmail').to.be.visible;
    login.inputEmail();
    // login.expect.element('@emailField').to.have.value.that.equals('v-kevinwo@hotpads.com');
    client.pause(1000);
  },

  '[02] - Enter valid password:' : function (client) {
    var login = client.page.rental_manager.login();
    // login.noPassword();
    // login.expect.element('@noPassword').to.be.visible;
    // login.badPassword();
    // client.pause(1000);
    // login.expect.element('@badPassword').to.be.visible;
    login.inputPassword();
    // login.expect.element('@passwordField').to.have.value.that.equals('Zillow1234!');
    client.pause(1000);
  },

  '[03] - Navigate to /rental-manager/' : function (client) {
    client.url('https://hotpads.com/rental-manager/', function(result) {
    var hello = client.page.rental_manager.postAListing();
    hello.assert.urlEquals('https://hotpads.com/rental-manager/');
    hello.expect.element('@welcomeToHotPadsRentalManager').to.be.present;
    hello.expect.element('@postToHotPads').to.be.present;
    hello.expect.element('@myListings').to.be.present;
    hello.expect.element('@backToHotPads').to.be.present;
    hello.expect.element('@emailNav').to.be.present;
    hello.click('@postToHotPads');
    client.pause(1000);
    });
  },

  '[04] - Select listing type: | For rent' : function (client) {
    var listingTypes = client.page.rental_manager.postAListing();
    listingTypes.assert.urlEquals('https://hotpads.com/rental-manager/post-a-listing');
    listingTypes.expect.element('@postingHeaderCopy').to.be.visible;
    listingTypes.expect.element('@selectYourListingTypeCopy').to.be.visible;
    listingTypes.expect.element('@selectForRent').to.be.visible;
    listingTypes.expect.element('@selectRoomForRent').to.be.visible;
    listingTypes.expect.element('@viewOtherListingsCopy').to.be.visible;
    listingTypes.expect.element('@viewOtherListings').to.be.visible;
    listingTypes.click('@selectForRent');
    client.pause(1000);
  },

  '[05] - Select property type: | Apartment Community' : function (client) {
    var propertTypes = client.page.rental_manager.postAListing();
    propertTypes.expect.element('@postingHeaderCopy').to.be.visible;
    propertTypes.expect.element('@selectYourPropertyTypeCopy').to.be.visible;
    propertTypes.expect.element('@house').to.be.visible;
    propertTypes.expect.element('@townhouse').to.be.visible;
    propertTypes.expect.element('@condo').to.be.visible;
    propertTypes.expect.element('@apartment').to.be.visible;
    propertTypes.expect.element('@goBackLink').to.be.visible;
    propertTypes.click('@apartment');
    client.pause(3000);
  },

  '[05b] - # of units: | Must be greater than 1' : function (client) {
    var unitsInApartment = client.page.rental_manager.postAListing();
    unitsInApartment.expect.element('@postingHeaderCopy').to.be.visible;
    unitsInApartment.expect.element('@totalUnitsCopy').to.be.visible;
    unitsInApartment.expect.element('@numberOfUnits').to.be.visible;
    unitsInApartment.expect.element('@goBackLink').to.be.visible;
    unitsInApartment.expect.element('@continueButton').to.be.visible;
    unitsInApartment.inputInvalidUnits();
    unitsInApartment.expect.element('@invalidNumberCopy').to.be.visible;
    unitsInApartment.inputValidUnits();
    client.pause(3000);
  },

  'Return \'{URL}\':' : function (client) {
    client.url(function(result) {
      console.log(result);
    });
  },

  '[06] - Verify property type: Apartment community' : function (client) {
    var verifyPropertyTitle = client.page.rental_manager.postAListing();
    verifyPropertyTitle.expect.element('@forRentApartmentTitle').to.be.visible;
    client.pause(1000);
  },

  '[07] - Save button should be disabled' : function (client) {
    var saveButtonDisabled = client.page.rental_manager.postAListing();
    saveButtonDisabled.expect.element('@saveListingButton').to.not.be.enabled;
    client.pause(1000);
  },

  '[08] - Check left-nav menu:' : function (client) {
    var leftNav = client.page.rental_manager.postAListing();
    leftNav.expect.element('@locationNav').to.be.visible;
    leftNav.expect.element('@buildingDetailsNav').to.be.visible;
    leftNav.expect.element('@buildingPhotosNav').to.be.visible;
    leftNav.expect.element('@communityAmenitiesNav').to.be.visible;
    leftNav.expect.element('@unitAmenitiesNav').to.be.visible;
    leftNav.expect.element('@floorplansNav').to.be.visible;
    leftNav.expect.element('@contactInfoNav').to.be.visible;
  },

  '[09] - Post a listing: No street address' : function (client) {
    var noLocation = client.page.rental_manager.postAListing();
    noLocation.noLocationAddress();
    noLocation.expect.element('@street').to.have.value.that.equals('');
  },

  '[10] - Post a listing: No Contact Information' : function (client) {
    client.expect.element('input[name=contactEmail]').to.have.value.that.equals('v-kevinwo@hotpads.com');
  },

  '[11] - Clicking on Activate should throw errors' : function (client) {
    var activateButton = client.page.rental_manager.postAListing();
    activateButton.expect.element('@activeListingButton').to.be.enabled;
    activateButton.click('@activeListingButton');
    activateButton.click('@activeListingButton');
    client.pause(1000);
  },

  '[12] - Show errors | Missing required fields:' : function (client) {
    var errors = client.page.rental_manager.postAListing();
    errors.expect.element('@noStreet').to.be.visible.before(3000);
    errors.expect.element('@noCity').to.be.visible;
    errors.expect.element('@noState').to.be.visible;
    errors.expect.element('@noZip').to.be.visible;
    errors.expect.element('@noListingTitle').to.be.visible;
    errors.expect.element('@noPropertyDescription').to.be.visible;
    errors.expect.element('@noPhoneNumber2').to.be.visible;
    errors.expect.element('@formErrors').to.be.visible;
  },

  '[13] - Post a listing: Location' : function (client) {
    var location = client.page.rental_manager.postAListing();
    location.locationAddress();
    location.expect.element('@street').to.have.value.that.equals('33 Vista Rd');
    location.expect.element('@city').to.have.value.that.equals('Alameda');
    location.expect.element('@state').to.have.value.that.equals('CA');
    location.expect.element('@zip').to.have.value.that.equals('94502');
  },

  '[14] - Post a listing: Building details' : function (client) {
    var buildingDetails = client.page.rental_manager.postAListing();
    buildingDetails.buildingDetails();
    buildingDetails.uploadPropertyPhoto();
    buildingDetails.expect.element('@listingTitle').to.have.value.that.equals('Test listing title');
    buildingDetails.expect.element('@propertyDescription').to.have.value.that.equals('This is an awesome place!');
    buildingDetails.expect.element('@leaseTerms').to.have.value.that.equals('Month-to-month');
    buildingDetails.expect.element('@websiteUrl').to.have.value.that.equals('hotpads.com');
    buildingDetails.expect.element('@sundayHours').to.have.value.that.equals('10-6p');
    buildingDetails.expect.element('@mondayHours').to.have.value.that.equals('10-6p');
    buildingDetails.expect.element('@tuesdayHours').to.have.value.that.equals('10-6p');
    buildingDetails.expect.element('@wednesdayHours').to.have.value.that.equals('10-6p');
    buildingDetails.expect.element('@thursdayHours').to.have.value.that.equals('10-6p');
    buildingDetails.expect.element('@fridayHours').to.have.value.that.equals('10-6p');
    buildingDetails.expect.element('@saturdayHours').to.have.value.that.equals('10-6p');
  },

  '[15] - Post a listing: Floorplan details' : function (client) {
    var floorplanDetails = client.page.rental_manager.postAListing();
    floorplanDetails.floorplanDetails();
    floorplanDetails.uploadfloorplanLayoutPhoto();
    floorplanDetails.uploadfloorplanPhotosPhoto();
    floorplanDetails.expect.element('@floorplanName').to.have.value.that.equals('Test floorplan name');
    floorplanDetails.expect.element('@beds').to.have.value.that.equals('3');
    floorplanDetails.expect.element('@baths').to.have.value.that.equals('2.5');
    floorplanDetails.expect.element('@price').to.have.value.that.equals('$7500');
  },

  '[16] - Post a listing: Contact information' : function (client) {
    var contactInfo = client.page.rental_manager.postAListing();
    contactInfo.contactInfo();
    contactInfo.expect.element('@name').to.have.value.that.equals('QA Test');
    contactInfo.expect.element('@phone').to.have.value.that.equals('(415) 555-5555');
    contactInfo.expect.element('@fax').to.have.value.that.equals('(415) 444-4444');
    contactInfo.expect.element('@cc').to.have.value.that.equals('qa@zrm.com');
  },

  '[17] - Post a listing: Building photos' : function (client) {
    var uploadPhoto = client.page.rental_manager.postAListing();
    uploadPhoto.uploadBuildingPhoto();
    client.pause(1000);
  },

  '[18] - Post a listing: Community amenities and rules | Amenities' : function (client) {
    var amenities = client.page.rental_manager.postAListing();
    amenities.expect.element('@amenitiesHeader').to.be.visible;
    amenities.click('@ac');
    amenities.click('@balcony');
    amenities.click('@furnished');
    amenities.click('@hardwoodFloor');
    amenities.click('@wheelchairAccess');
    amenities.click('@garageParking');
    amenities.click('@offstreetParking');
    client.pause(1000);
  },

  '[19] - Post a listing: Community amenities and rules | Laundry' : function (client) {
    var laundry = client.page.rental_manager.postAListing();
    laundry.expect.element('@laundryHeader').to.be.visible;
    laundry.click('@none');
    client.pause(1000);
  },

  '[20] - Post a listing: Community amenities and rules | Pets' : function (client) {
    var pets = client.page.rental_manager.postAListing();
    pets.expect.element('@petsHeader').to.be.visible;
    pets.click('@noPetsAllowed');
    client.pause(1000);
  },

  '[21] - Post a listing: Community amenities and rules | Unit amenities' : function (client) {
    var unitAmenities = client.page.rental_manager.postAListing();
    unitAmenities.expect.element('@unitAmenities').to.be.visible;
    unitAmenities.addUnitAmenities();
  },

  '[22] - Now saving...' : function (client) {
    var saveButton = client.page.rental_manager.postAListing();
    saveButton.expect.element('@saveListingButton').to.be.enabled;
    saveButton.click('@saveListingButton');
    client.pause(1000);
  },
};
