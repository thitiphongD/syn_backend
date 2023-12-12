const createUserController = require('../controllers/user.controller');

module.exports = (app) => {
    app.post('/new-user', createUserController.createUser)
}