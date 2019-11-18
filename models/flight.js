const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: new Date(new Date().getFullYear() + 1, new Date().getMonth(), new Date().getDate(), new Date().getHours(), new Date().getMinutes()),
    }
})

module.exports = mongoose.model('Flight', flightSchema);