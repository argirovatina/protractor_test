var KLMSearchPage = function() {
  this.monthHeader = () => element.all(by.css('.bw-month__header-month-name')).get(0);

 this.getPriceByDate = async function(day_number) {
    var price = await element.all(by.css('.qa-search-month__day-price')).get(day_number).getText().toString()
    return price.replace(/[^\d.]/g, '');
  };
};
module.exports = new KLMSearchPage();