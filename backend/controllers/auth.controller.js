const User = require("../models/User")
const register = async(req, res) => {
    try{
        const {name, email, password} = req.body;
        
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:"User already exists"});
        }
        
        await User.create({name, email, password});
    
        return res.status(201).json({message:"User created successfully"});
    }catch(error){
        console.error("Register error:", error);
        return res.status(500).json({message:"Internal server error"});
    }
}

const login = async(req, res) => {
    try{
        const {email, password} = req.body;
    
        const user = await User.findOne({email});
    
        if(!user || user.password !== password){
            return res.status(400).json({message:"Invalid password"});
        }
    
        return res.status(200).json({
            message: "Login successful",
            user: { id: user._id, name: user.name, email: user.email }
        });

    }catch(error){
        console.error("Login error:", error);
        return res.status(500).json({message:"Internal server error"});
    }
}

module.exports = {register, login};