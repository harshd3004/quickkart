const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['customer','admin'],
        default: 'customer'
    },
}, {timestamps: true});

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Skip if unchanged

  try {
    const saltRounds = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
  } catch (err) {
    next(err);
  }
});

// method to compare passwords
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

//JWT
UserSchema.methods.generateToken = async function(){
  try{
    return jwt.sign({
      userId: this._id.toString(),
      email: this.email,
      role: this.role
    }, process.env.JWT_SECRET, {expiresIn: "2d"});
  }catch(error){
    console.error(error);
  }}
const User = model('User', UserSchema);
module.exports = User;