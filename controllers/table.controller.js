const Table = require('../models/table.model');
const mongoose = require('mongoose');

exports.createTable = async (req, res) => {
    try {
        const newTable = new Table({
            table: req.body.table,
        });
        const dataTable = await newTable.save();
        return res.status(200).json({
            message: 'Create table success',
            table: dataTable
        })
    } catch (error) {
        console.error;
        return res.status(500).json({ message: 'Internal server error' })
    }
}

exports.getAllTable = async (req, res) => {
    try {
        const tables = await Table.find();
        return res.status(200).json({
            tables: tables,
        });
    } catch (error) {
        console.error;
        return res.status(500).json({ message: 'Internal server error' })
    }
}

exports.getTable = async (req, res) => {
    try {
        const tableId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(tableId) || !table) {
            return res.status(400).json({ message: 'Invalid table ID' });
        }

        const table = await Table.findById(tableId);

        if (!table) {
            return res.status(404).json({ message: 'Table not found' });
        }

        return res.status(200).json({
            message: 'Get table by ID success',
            table: table,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' })
    }
}

exports.changeTableName = async (req, res) => {
    const tableId = req.params.id;
    const newName = req.body.newName;
    try {
        const table = await Table.findByIdAndUpdate(
            tableId,
            { $set: { table: newName } },
            { new: true }
        );

        if (!table) {
            return res.status(404).json({ message: 'Table not found' });
        }
        return res.status(200).json({
            message: 'Update table name success',
            table: table,
        });
    } catch (error) {
        console.error;
        return res.status(500).json({ message: 'Internal server error' })
    }
}

exports.deleteTable = async (req, res) => {
    const tableId = req.params.id;
    try {
        const table = await Table.findByIdAndDelete(tableId);

        if (!table) {
            return res.status(404).json({ message: 'Table not found' });
        }

        return res.status(200).json({
            message: 'Delete table success',
            table: table,
        });
    } catch (error) {
        console.error;
        return res.status(500).json({ message: 'Internal server error' })
    }
}

exports.reserveTable = async (req, res) => {
    try {
        const tableId = req.body.id;
        const clientName = req.body.clientName;
        const clientTel = req.body.clientTel;

        const updatedTable = await Table.findByIdAndUpdate(
            tableId,
            { $set: { status: 'pending', client_name: clientName, client_tel: clientTel } },
            { new: true }
        );

        if (!updatedTable) {
            return res.status(404).json({ message: 'Table not found' });
        }

        return res.status(200).json({
            message: 'Table reserved successfully',
            table: updatedTable,
        });
    } catch (error) {
        console.error;
        return res.status(500).json({ message: 'Internal server error' })
    }
}

exports.resetAllTables = async (req, res) => {
    try {
        const updatedTables = await Table.updateMany({}, { status: 'available', client_name: null, client_tel: null });

        return res.status(200).json({
            message: 'Reset all tables success',
            updatedTables: updatedTables,
        });
    } catch (error) {
        console.error;
        return res.status(500).json({ message: 'Internal server error' })
    }
}