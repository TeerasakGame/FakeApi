// products.js
var faker = require('faker');

function generateProducts () {
  let products = [];

  for (var id = 0; id < 10000; id++) {
    products.push({
      "id": id,
      "productName": faker.commerce.productName(),
      "price": faker.commerce.price(),
      "qty": faker.finance.amount()
    });
  }

  return products ;
}

// json-server requires that you export
// a function which generates the data set
module.exports = generateProducts();