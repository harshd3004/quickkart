import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const OrderSchema = new Schema({
    user: {
        typeof: Types.ObjectId,
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

export default model('Order', OrderSchema);