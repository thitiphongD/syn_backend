const healthCheckController = require('../controllers/healthcheck.controller');

module.exports = (app) => {
    app.get('/', healthCheckController.healthCheck)
}