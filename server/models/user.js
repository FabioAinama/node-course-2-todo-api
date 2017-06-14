let mongoose = require('mongoose');

let User = mongoose.model('Users', {
    email: {
        type: String,
        minlength: true,
        minlength: 6,
        trim: true
    }
});

module.exports = {User};