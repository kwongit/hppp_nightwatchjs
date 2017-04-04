module.exports = {
  elements: {
    // copy

    hello: { selector: '//h1[contains(text(), "Hello v-kevinwo@zillowgroup.com, welcome to hotpads Rental Manager")]', locateStrategy: 'xpath' },

    // links

    post: { selector: '//a[contains(text(), "Post to ")]', locateStrategy: 'xpath' },

    listings: { selector: '//a[contains(text(), "My listings")]', locateStrategy: 'xpath' },

    back: { selector: '//a[contains(text(), "Back to ")]', locateStrategy: 'xpath' },

    email: { selector: '//a[contains(text(), "v-kevinwo@zillowgroup.com")]', locateStrategy: 'xpath' },
  }
};
