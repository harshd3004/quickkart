const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
    },
    category: {
        type: String
    },
    stock: {
        type: Number,
        default: 0
    }
},{timestamps: true});

const Product = model('Product', ProductSchema);
module.exports = Product;