const path = require('path');

let mockFile = (schema) => {
    return require(path.join(__dirname, '/file/', schema));
};

module.exports = () => {
    return {
        customers: mockFile('customers.js'),
        products: mockFile('products.js')
    };
};