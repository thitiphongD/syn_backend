const Visitor = require('../models/visitor.model');
const mongoose = require('mongoose');

exports.visitor = async (req, res) => {
    try {
        const { ipAddress, device, browser } = req.body;

        const newVisitor = new Visitor({
            ipAddress,
            device,
            browser,
        });

        const savedVisitor = await newVisitor.save();

        return res.status(201).json({
            message: 'Visitor saved successfully',
            visitor: savedVisitor,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' })
    }
}

exports.countVisitor = async (req, res) => {
    try {
        const visitorCount = await Visitor.countDocuments({});
        return res.status(200).json({
            message: 'Visitor count retrieved successfully',
            visitorCount: visitorCount,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

exports.getVisitorOneDate = async (req, res) => {
    try {
        const { date } = req.query;

        if (!date) {
            return res.status(400).json({ message: 'Please provide the date parameter.' });
        }

        const visitors = await Visitor.find({
            accessedAt: { $gte: new Date(date), $lt: new Date(date).setDate(new Date(date).getDate() + 1) },
        });

        const visitorCount = await Visitor.countDocuments({
            accessedAt: { $gte: new Date(date), $lt: new Date(date).setDate(new Date(date).getDate() + 1) },
        });

        return res.status(200).json({
            message: 'Visitors retrieved successfully',
            visitors: visitors,
            count: visitorCount
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
