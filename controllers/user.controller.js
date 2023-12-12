const User = require('../models/user.model');

exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        return res.status(201).json({
            message: 'Create User Success',
            user: newUser
        })
    } catch (error) {
        console.error;
        return res.status(500).json({ message: 'Internal server error' })
    }
}