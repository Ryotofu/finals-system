const mongoose = require("mongoose");

const itemData = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },

    itemPrice: {
        type: Number,
        required: true
    },

    itemStock: {
        type: Number,
        required: true
    },

    supplier: {
        type: String
    }
});

module.exports = mongoose.model("Item", itemData);