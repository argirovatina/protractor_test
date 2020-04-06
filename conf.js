exports.config = {
  getPageTimeout: 30000,
  allScriptsTimeout: 20000,
  directConnect: true,
	jasmineNodeOpts: {
		defaultTimeoutInterval: 100000
	},
	onPrepare: () => {
    	browser.waitForAngularEnabled(false);
	},
  specs: ['flight_search_spec.js']
};