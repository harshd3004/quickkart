const Product = require("../models/Product");
const getAllProducts = async(req,res) =>{
    try{
        const products = await Product.find({});
        const total = await Product.countDocuments({});

        return res.status(200).json({products,total});
    }catch(error){
        console.error("Get all products error:", error);
        return res.status(500).json({message:"Internal server error"});
    }
}
module.exports = {getAllProducts};