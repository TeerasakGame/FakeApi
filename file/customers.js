// customers.js
var faker = require('faker');

function generateUser () {
  let user = [];

  for (var id = 0; id < 5; id++) {
    user.push({
      "id": id,
      "name":faker.name.findName(),
      "gender": faker.name.gender(),
      "date":faker.datatype.datetime(),
      "image":faker.image.avatar(),
      "email":faker.internet.email(),
      "password":faker.internet.password(),
    });
  }

  return user ;
}

// json-server requires that you export
// a function which generates the data set
module.exports = generateUser();