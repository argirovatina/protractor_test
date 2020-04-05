var klmHomePage = require('./klm_home_page');
var klmSearchPage = require('./klm_search_page');

describe('KLM home page', function() {
  it('should filter by destination country', async function() {
    await klmHomePage.get();
    await klmHomePage.acceptCookies()
    await klmHomePage.setDestination("Kiev");
    await klmHomePage.viewOffer().click();
    // await browser.wait(EC.visibilityOf(klmSearchPage.monthHeader()))
    // klmSearchPage.getPriceByDate('20').toBeGreaterThan(100)
    // klmSearchPage.getPriceByDate('28').toBeGreaterThan(100)
  });
});