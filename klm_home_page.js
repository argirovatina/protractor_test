var KLMHomePage = function() {
  this.agreeCookies = () => element(by.css('#agreeButton'));
  this.destinationInput = () => element.all(by.css('.g-locationpicker--destination')).get(0);
  this.foundDestination = () => element(by.css('.g-locationpicker-items'));
  this.viewOffer = () => element(by.css('.g-search-form--footer-continue-button'));

  this.get = async function() {
    await browser.get('https://www.klm.com/home/nl/en');
  };

  this.acceptCookies = async function() {
    var EC = protractor.ExpectedConditions;
    await browser.driver.manage().deleteAllCookies();
    await this.get();
    await browser.wait(EC.visibilityOf(this.agreeCookies()));
    await this.agreeCookies().click();
  }

  this.setDestination = async function(text) {
    var EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(this.destinationInput()))
    await this.destinationInput().sendKeys(text);
    await browser.wait(EC.visibilityOf(this.foundDestination()))
    await this.foundDestination().click();
  };
};
module.exports = new KLMHomePage();