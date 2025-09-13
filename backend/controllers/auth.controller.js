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
    
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
    
        return res.status(200).json({
            message: "Login successful",
            user: user._id.toString(),
            token: await user.generateToken()
        });

    }catch(error){
        console.error("Login error:", error);
        return res.status(500).json({message:"Internal server error"});
    }
}

module.exports = {register, login};