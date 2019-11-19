const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport:{
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
    },
    arrival: Date
},
{
    timestamps: true
})

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
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
        default: 'SAN'
    },
    destinations: [destinationSchema]
},
{
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema);