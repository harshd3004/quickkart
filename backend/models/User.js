import mongoose from "mongoose";

const { Schema, model } = mongoose;

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

export default model('User', UserSchema);