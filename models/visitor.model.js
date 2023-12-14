const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
    ipAddress: { type: String, required: true },
    device: { type: String, required: true },
    browser: { type: String, required: true },
    accessedAt: { type: Date, default: Date.now },
});

const Visitor = mongoose.model('Visitor', visitorSchema);

module.exports = Visitor;
