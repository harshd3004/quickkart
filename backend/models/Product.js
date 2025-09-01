import mongoose from "mongoose";

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

export default model('Product', ProductSchema);