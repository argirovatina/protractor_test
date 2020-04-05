exports.config = {
  getPageTimeout: 30000,
  allScriptsTimeout: 20000,
  directConnect: true,
	jasmineNodeOpts: {
		defaultTimeoutInterval: 10000
	},
	onPrepare: () => {
    	browser.waitForAngularEnabled(false);
	},
  specs: ['flight_search_spec.js']
};