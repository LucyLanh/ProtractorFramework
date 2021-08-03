// var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

// var reporter = new HtmlScreenshotReporter({
//   dest: 'target/screenshots',
//   filename: 'my-report.html'
// });

exports.config = {
  directConnect: true,
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine2',
  specs: ['../tests/calculator.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  beforeLaunch: function () {
    // return new Promise(function (resolve) {
    //   reporter.beforeLaunch(resolve);
    // });
  },

  onPrepare: function () {
    require('babel-register');
    // jasmine.getEnv().addReporter(reporter);
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return Buffer.from(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
    // var jasmineReporters = require('jasmine-reporters');
    // jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
    //   consolidateAll: true,
    //   savePath: './',
    //   filePrefix: 'xmlresults'
    // }));
  },

  afterLaunch: function (exitCode) {
    // return new Promise(function (resolve) {
    //   reporter.afterLaunch(resolve.bind(this, exitCode));
    // });
  },
  //HTMLReport called once tests are finished
  onComplete: function () {
    // var browserName, browserVersion;
    // var capsPromise = browser.getCapabilities();

    // capsPromise.then(function (caps) {
    //   browserName = caps.get('browserName');
    //   browserVersion = caps.get('version');
    //   platform = caps.get('platform');

    //   var HTMLReport = require('protractor-html-reporter-2');

    //   var testConfig = {
    //     reportTitle: 'Protractor Test Execution Report',
    //     outputPath: './',
    //     outputFilename: 'ProtractorTestReport',
    //     screenshotPath: './screenshots',
    //     testBrowser: browserName,
    //     browserVersion: browserVersion,
    //     modifiedSuiteName: false,
    //     screenshotsOnlyOnFailure: true,
    //     testPlatform: platform
    //   };
    //   new HTMLReport().from('xmlresults.xml', testConfig);
    // });
  }
};