const register = (req, res) => {
    res.json({message:"register"});
}

const login = (req, res) => {
    res.json({message:"login"});
}

module.exports = {register, login};