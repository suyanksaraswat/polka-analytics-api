const mongoose = require("mongoose");

const Validator = new mongoose.Schema({
    stashId: {
        type: String,
        maxlength: 255,
        required: true,
    },
    stashIdTruncated: {
        type: String,
        maxlength: 100,
        required: true,
    },
    points: {
        type: [Number],
        required: true
    },
    poolReward: {
        type: Number,
        required: true
    },
    totalStake: {
        type: Number,
        required: true,
    },
    commission: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
        maxlength: 255,
    }

}, {timestamps: true});

module.exports = mongoose.model("validators", Validator);