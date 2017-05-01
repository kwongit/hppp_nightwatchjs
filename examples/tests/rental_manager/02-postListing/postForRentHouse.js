/* jshint expr: true */
module.exports = {
  '[00] - Sign in / register | https://hotpads.com/login' : function (client) {
    client
      .url('https://hotpads.com/login')
      .pause(1000);
    var login = client.page.rental_manager.login();
    login.inputEmail();
    client.pause(1000);
    login.inputPassword();
    client.pause(1000);
  },

  '[03] - Navigate to /rental-manager | Post a listing' : function (client) {
    client.url('https://hotpads.com/rental-manager/', function(result) {
    var hello = client.page.rental_manager.postAListing();
    hello.assert.urlEquals('https://hotpads.com/rental-manager/');
    hello.waitForElementVisible('@welcomeToHotPadsRentalManager', 100, false);
    hello.waitForElementVisible('@postToHotPads', 100, false);
    hello.waitForElementVisible('@myListings', 100, false);
    hello.waitForElementVisible('@backToHotPads', 100, false);
    hello.waitForElementVisible('@emailNav', 100, false);
    hello.click('@postToHotPads');
    client.pause(1000);
    });
  },

  '[04] - Select listing type: | For rent' : function (client) {
    var listingTypes = client.page.rental_manager.postAListing();
    listingTypes.assert.urlEquals('https://hotpads.com/rental-manager/post-a-listing');
    listingTypes.waitForElementVisible('@postingHeaderCopy', 100, false);
    listingTypes.waitForElementVisible('@selectYourListingTypeCopy', 100, false);
    listingTypes.waitForElementVisible('@selectForRent', 100, false);
    listingTypes.waitForElementVisible('@selectRoomForRent', 100, false);
    listingTypes.waitForElementVisible('@viewOtherListingsCopy', 100, false);
    listingTypes.waitForElementVisible('@viewOtherListings', 100, false);
    listingTypes.click('@selectForRent');
    client.pause(1000);
  },
  '[05] - Select property type: | House' : function (client) {
    var propertTypes = client.page.rental_manager.postAListing();
    propertTypes.waitForElementVisible('@postingHeaderCopy', 100, false);
    propertTypes.waitForElementVisible('@selectYourPropertyTypeCopy', 100, false);
    propertTypes.waitForElementVisible('@house', 100, false);
    propertTypes.waitForElementVisible('@townhouse', 100, false);
    propertTypes.waitForElementVisible('@condoApartment', 100, false);
    propertTypes.waitForElementVisible('@apartmentCommunity', 100, false);
    propertTypes.waitForElementVisible('@goBackLink', 100, false);
    propertTypes.click('@house');
    client.pause(1000);
  },

  'Return \'{URL}\':' : function (client) {
    client.url(function(result) {
      console.log(result);
    });
  },

  '[06] - Verify property type: House' : function (client) {
    client.assert.urlContains('https://hotpads.com/rental-manager/user/edit-listing/');
    var verifyPropertyTitle = client.page.rental_manager.postAListing();
    verifyPropertyTitle.waitForElementVisible('@postToHotPads', 100, false);
    verifyPropertyTitle.waitForElementVisible('@myListings', 100, false);
    verifyPropertyTitle.waitForElementVisible('@backToHotPads', 100, false);
    verifyPropertyTitle.waitForElementVisible('@emailNav', 100, false);
    verifyPropertyTitle.waitForElementVisible('@forRentHouseTitle', 100, false);
    client.pause(1000);
  },

  '[07] - Save button should be disabled' : function (client) {
    var saveButtonDisabled = client.page.rental_manager.postAListing();
    saveButtonDisabled.expect.element('@saveListingButton').to.not.be.enabled;
    client.pause(1000);
  },

  '[08] - Check left-nav menu:' : function (client) {
    var leftNav = client.page.rental_manager.postAListing();
    leftNav.waitForElementVisible('@locationNav', 100, false);
    leftNav.waitForElementVisible('@detailsAndDescriptionNav', 100, false);
    leftNav.waitForElementVisible('@amenitiesAndRulesNav', 100, false);
    leftNav.waitForElementVisible('@photosNav', 100, false);
    leftNav.waitForElementVisible('@contactInfoNav', 100, false);
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
    client.pause(1000);
  },

  '[12] - Show errors | Missing required fields:' : function (client) {
    var errors = client.page.rental_manager.postAListing();
    errors.waitForElementVisible('@noStreet', 100, false);
    errors.waitForElementVisible('@noCity', 100, false);
    errors.waitForElementVisible('@noState', 100, false);
    errors.waitForElementVisible('@noZip', 100, false);
    errors.waitForElementVisible('@noBeds', 100, false);
    errors.waitForElementVisible('@noBaths', 100, false);
    errors.waitForElementVisible('@noPropertyDescription', 100, false);
    errors.waitForElementVisible('@noPhoneNumber2', 100, false);
    errors.waitForElementVisible('@formErrors', 100, false);
  },

  '[13] - Post a listing: Location' : function (client) {
    var location = client.page.rental_manager.postAListing();
    location.locationAddress();
    location.waitForElementVisible('@hideAddress', 100, false);
    location.expect.element('@street').to.have.value.that.equals('33 Vista Rd');
    location.expect.element('@unitNumber').to.have.value.that.equals('');
    location.expect.element('@city').to.have.value.that.equals('Alameda');
    location.expect.element('@state').to.have.value.that.equals('CA');
    location.expect.element('@zip').to.have.value.that.equals('94502');
  },

  '[14] - Post a listing: Details and Description' : function (client) {
    var detailsAndDescription = client.page.rental_manager.postAListing();
    detailsAndDescription.detailsAndDescription();
    detailsAndDescription.expect.element('@price').to.have.value.that.equals('$7500');
    detailsAndDescription.expect.element('@beds').to.have.value.that.equals('3');
    detailsAndDescription.expect.element('@baths').to.have.value.that.equals('2.5');
    detailsAndDescription.expect.element('@sqft').to.have.value.that.equals('');
    detailsAndDescription.expect.element('@leaseTerms').to.have.value.that.equals('Month-to-month');
    detailsAndDescription.expect.element('@propertyDescription').to.have.value.that.equals('Post property description');
  },

  '[15] - Post a listing: Contact Information' : function (client) {
    var contactInfo = client.page.rental_manager.postAListing();
    contactInfo.contactInfo();
    contactInfo.expect.element('@name').to.have.value.that.equals('QA Test');
    contactInfo.expect.element('@phone').to.have.value.that.equals('(415) 555-5555');
    contactInfo.expect.element('@fax').to.have.value.that.equals('(415) 444-4444');
    contactInfo.expect.element('@cc').to.have.value.that.equals('qa@zrm.com');
  },

  '[16] - Post a listing: Building photos' : function (client) {
    var uploadPhoto = client.page.rental_manager.postAListing();
    uploadPhoto.uploadBuildingPhoto();
    uploadPhoto.waitForElementVisible('@photoCaption', 3000);
    uploadPhoto.photoCaption();
    client.pause(1000);
  },

  '[17] - Post a listing: Community amenities and rules | Amenities' : function (client) {
    var amenities = client.page.rental_manager.postAListing();
    amenities.waitForElementVisible('@amenitiesHeader', 100, false);
    amenities.click('@ac');
    amenities.click('@balcony');
    amenities.click('@furnished');
    amenities.click('@hardwoodFloor');
    amenities.click('@wheelchairAccess');
    amenities.click('@garageParking');
    amenities.click('@offstreetParking');
    client.pause(1000);
  },

  '[18] - Post a listing: Community amenities and rules | Laundry' : function (client) {
    var laundry = client.page.rental_manager.postAListing();
    laundry.waitForElementVisible('@laundryHeader', 100, false);
    laundry.click('@none');
    laundry.click('@inUnit');
    laundry.click('@shared');
    client.pause(1000);
  },

  '[19] - Post a listing: Amenities and Rules | Pets' : function (client) {
    var pets = client.page.rental_manager.postAListing();
    pets.waitForElementVisible('@petsHeader', 100, false);
    pets.click('@noPetsAllowed');
    pets.click('@cats');
    pets.click('@smallDogs');
    pets.click('@largeDogs');
    client.pause(1000);
  },

  '[20] - Post a listing: Additional Amenities' : function (client) {
    var additionalAmenities = client.page.rental_manager.postAListing();
    additionalAmenities.waitForElementVisible('@additionalAmenities', 100, false);
    additionalAmenities.addAdditionalAmenities();
  },

  '[21] - Now saving...' : function (client) {
    var saveButton = client.page.rental_manager.postAListing();
    saveButton.expect.element('@saveListingButton').to.be.enabled;
    saveButton.click('@saveListingButton');
    client.pause(1000);
  },
};
