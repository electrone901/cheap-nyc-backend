const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Food', foodSchema);