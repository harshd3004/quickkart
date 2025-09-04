const Order = require("../models/Order");
const Product = require("../models/Product");

const createOrder = async (req, res) => {
  try {
    const { user, products } = req.body;

    if (!user || !products || products.length === 0) {
      return res.status(400).json({ message: "User and products are required" });
    }

    // Validate products and calculate total
    let total = 0;
    const orderProducts = [];

    for (const item of products) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res.status(404).json({ message: `Product not found: ${item.productId}` });
      }

      const qty = item.qty || 1;
      const subtotal = product.price * qty;
      total += subtotal;

      orderProducts.push({
        productId: product._id,
        name: product.name,
        price: product.price,
        qty,
      });
    }

    // Create the order
    const order = await Order.create({
      user,
      products: orderProducts,
      total,
    });

    return res.status(201).json({
      message: "Order created successfully",
      orderId: order._id,
      total,
    });
  } catch (error) {
    console.error("Create order error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createOrder };