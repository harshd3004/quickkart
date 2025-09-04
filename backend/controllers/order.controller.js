const Order = require("../models/Order");
const createOrder = async(req, res) => {
    try{
        const { user, products, total } = req.body;
        const order = await Order.create({user, products, total});;
        return res.status(201).json({message: "Order created successfully",orderId: order._id});
    }catch(error){
        console.error("Create order error:", error);
        return res.status(500).json({message:"Internal server error"});
    }
};

module.exports = { createOrder };