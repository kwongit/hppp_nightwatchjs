module.exports = {
  elements: {
    //amenities

    ac: { selector: '//span[contains(text(), "A/C")]', locateStrategy: 'xpath' },

    balcony1: { selector: '//span[contains(text(), "Balcony / deck")]', locateStrategy: 'xpath' },

    balcony2: { selector: '//span[contains(text(), "Balcony / Deck")]', locateStrategy: 'xpath' },

    furnished: { selector: '//span[contains(text(), "Furnished")]', locateStrategy: 'xpath' },

    hardwood1: { selector: '//span[contains(text(), "Hardwood floor")]', locateStrategy: 'xpath' },

    hardwood2: { selector: '//span[contains(text(), "Hardwood Floor")]', locateStrategy: 'xpath' },

    wheelchair: { selector: '//span[contains(text(), "Wheelchair access")]', locateStrategy: 'xpath' },

    garage: { selector: '//span[contains(text(), "Garage parking")]', locateStrategy: 'xpath' },

    offstreet: { selector: '//span[contains(text(), "Off-street parking")]', locateStrategy: 'xpath' },

    //laundry

    none: { selector: '//span[contains(text(), "None")]', locateStrategy: 'xpath' },

    inUnit: { selector: '//span[contains(text(), "In unit")]', locateStrategy: 'xpath' },

    shared: { selector: '//span[contains(text(), "Shared / in-building")]', locateStrategy: 'xpath' },

    //pets

    noPetsAllowed: { selector: '//span[contains(text(), "No pets allowed")]', locateStrategy: 'xpath' },

    cats: { selector: '//span[contains(text(), "Cats ok")]', locateStrategy: 'xpath' },

    smallDogs: { selector: '//span[contains(text(), "Small dogs ok")]', locateStrategy: 'xpath' },

    largeDogs: { selector: '//span[contains(text(), "Large dogs ok")]', locateStrategy: 'xpath' }
  },
};
