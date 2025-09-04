const mongoose = require("mongoose");
const { Schema, model, Types } = mongoose;

const OrderSchema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        productId: { 
            type: Types.ObjectId, 
            ref: "Product", 
            required: true 
        },
        name: String,     
        price: Number,
        qty: { 
            type: Number, 
            required: true, 
            min: 1 },
  }],
  total: { 
    type: Number, 
    required: true 
  },
  status: { 
    type: String, 
    enum: ["pending", "paid", "shipped"], 
    default: "pending" },
},{ timestamps: true });

const Order = model('Order', OrderSchema);
module.exports = Order;