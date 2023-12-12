const mongoose = require('mongoose');

const statusTable = ['available', 'pending', 'reserved'];

const tableSchema = new mongoose.Schema({
    table: { type: String, require: true, unique: true },
    status: { type: String, enum: statusTable, default: 'available' },
    client_name: { type: String, default: null },
    client_tel: { type: String, default: null },
});

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;