const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    username : String,
    email: String,
    password: String,
    phoneno: String,
    address: String
});

const User = mongoose.model('User',userSchema);

module.exports = User