import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    passwordHash: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    tokenSeed: { type: String, required: true, unique: true },
    created: { type: Date, default : () => new Date()},
    portfolio: { type: mongoose.Types.ObjectId, ref: 'Portfolio' }
});

const portfolioSchema = mongoose.Schema({
    totalPrice: { type: Number, required: true },
    breakdown: { type: Map, of: Number, required: true }
});

const stockSchema = mongoose.Schema({
    name: { type: String, required: true },
    shares: { type: Number, required: true },
    tag: { type: mongoose.Types.ObjectId, ref: 'Tag' }
});

const tagSchema = mongoose.Schema({
    name: { type: String, required: true },
});

export { userSchema, portfolioSchema, stockSchema, tagSchema };
