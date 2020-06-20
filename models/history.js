const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const historySchema = new Schema({
    fromCurr: {
        type: String,
        default: '',
        required: true
    },
    toCurr: {
        type: String,
        default: '',
        required: true
    },
    amount: {
        type: Currency,
        required: true,
        min: 0
    },
    convertedAmount: {
        type: Currency,
        required: true,
        min: 0
    }
}, { 
    timestamps: true
});

// userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('History', historySchema);