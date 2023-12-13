const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
    ipAddress: { type: String, required: true },
    device: { type: String, required: true },
    browser: { type: String, required: true },
    accessedAt: {
        type: Date,
        default: Date.now,
        get: function (v) {
            return v.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' }); // 'Asia/Bangkok' is the time zone for Bangkok
        },
    },
});

const Visitor = mongoose.model('Visitor', visitorSchema);

module.exports = Visitor;