const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        default: '',
        required: true
    },
    name: {
        type: String,
        default: ''
    }
});

// userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);