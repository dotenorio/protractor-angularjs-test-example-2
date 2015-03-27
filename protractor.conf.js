exports.config = {
  getPageTimeout: 30000,
  
  specs: [
    './tests/test.js',
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8888/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    showColors: false,
    isVerbose: true,
    includeStackTrace: true
  },

  directConnect: true,

  onPrepare: function() {
    browser.manage().window().maximize();
  }
};