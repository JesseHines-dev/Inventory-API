const mongoose = require ('mongoose')

const itemSchema = new mongoose.Schema({
    listing: {
        type: String,
        required: true
    },
    quantityAvailable: {
        type: String,
        required: true
    },
    itemOrdered: {
        type: Date,
        required: true,
        default: Date.now
    },
    itemOrdered: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Item', itemSchema)