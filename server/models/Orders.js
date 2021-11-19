const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({

    username : String,
    email: String,
    cart: Object,
    address: String,
    totalamt: String

});

const Order = mongoose.model('Order',orderSchema);

module.exports = Order