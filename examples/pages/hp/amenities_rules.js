module.exports = {
  elements: {
    //amenities
    ac: { selector: '//span[contains(text(), "A/C")]', locateStrategy: 'xpath' },
    balcony: { selector: '//span[contains(text(), "Balcony / deck")]', locateStrategy: 'xpath' },
    furnished: { selector: '//span[contains(text(), "Furnished")]', locateStrategy: 'xpath' },
    hardwood: { selector: '//span[contains(text(), "Hardwood floor")]', locateStrategy: 'xpath' },
    wheelchair: { selector: '//span[contains(text(), "Wheelchair access")]', locateStrategy: 'xpath' },
    garage: { selector: '//span[contains(text(), "Garage parking")]', locateStrategy: 'xpath' },
    offstreet: { selector: '//span[contains(text(), "Off-street parking")]', locateStrategy: 'xpath' },

    //laundry
    none: { selector: '//span[contains(text(), "None")]', locateStrategy: 'xpath' },
    inunit: { selector: '//span[contains(text(), "In unit")]', locateStrategy: 'xpath' },
    shared: { selector: '//span[contains(text(), "Shared / in-building")]', locateStrategy: 'xpath' },

    //pets
    nopetsallowed: { selector: '//span[contains(text(), "No pets allowed")]', locateStrategy: 'xpath' },
    cats: { selector: '//span[contains(text(), "Cats ok")]', locateStrategy: 'xpath' },
    smalldogs: { selector: '//span[contains(text(), "Small dogs ok")]', locateStrategy: 'xpath' },
    largedogs: { selector: '//span[contains(text(), "Large dogs ok")]', locateStrategy: 'xpath' }
  },
};
