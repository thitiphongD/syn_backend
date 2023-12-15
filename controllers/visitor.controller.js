const Visitor = require('../models/visitor.model');

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
        const allVisitors = await Visitor.find({});

        const visitorCount = await Visitor.countDocuments({});
        return res.status(200).json({
            message: 'Visitor count retrieved successfully',
            visitorCount: visitorCount,
            visitors: allVisitors
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

exports.selectByDevice = async (req, res) => {
    const device = req.params.device;
    try {
        const visitorDevices = await Visitor.find({ device: device });
        const visitorCount = await Visitor.countDocuments({
            device: device,
        });

        return res.status(200).json({
            message: `Visitors retrieved successfully by ${device}`,
            visitorCount: visitorCount,
            visitors: visitorDevices,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

exports.selectByBrowser = async (req, res) => {
    const browser = req.params.browser;
    try {
        const visitorBrowser = await Visitor.find({ browser: browser });

        const visitorCount = await Visitor.countDocuments({
            browser: browser,
        });

        return res.status(200).json({
            message: `Visitors retrieved successfully by ${browser}`,
            visitorCount: visitorCount,
            visitors: visitorBrowser,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

exports.selectBetweenTime = async (req, res) => {
    const startTime = req.params.startTime;
    const endTime = req.params.endTime;

    try {
        const visitorsBetweenTime = await Visitor.find({
            accessedAt: {
                $gte: new Date(startTime),
                $lte: new Date(endTime),
            },
        });

        const visitorCount = await Visitor.countDocuments({
            accessedAt: {
                $gte: new Date(startTime),
                $lte: new Date(endTime),
            },
        });

        return res.status(200).json({
            message: `Visitors retrieved successfully between ${startTime} and ${endTime}`,
            visitorCount: visitorCount,
            visitors: visitorsBetweenTime,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

exports.deleteVisitor = async (req, res) => {
    const id = req.params.id;
    try {
        const visitor = await Visitor.findByIdAndDelete(id);

        if (!visitor) {
            return res.status(404).json({ message: 'Visitor not found' });
        }

        return res.status(200).json({
            message: 'Delete visitor success',
            visitor: visitor,
        });
    } catch (error) {
        console.error;
        return res.status(500).json({ message: 'Internal server error' })
    }
}

