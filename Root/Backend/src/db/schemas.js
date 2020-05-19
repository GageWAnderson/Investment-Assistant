import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    passwordHash: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    tokenSeed: { type: String, required: true, unique: true },
    created: { type: Date, default : () => new Date()},
});

const tagSchema = mongoose.Schema({
    name: { type: String, required: true },
});

export { userSchema, tagSchema };