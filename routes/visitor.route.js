const visitorController = require('../controllers/visitor.controller');

module.exports = (app) => {
    app.post('/api/visitor', visitorController.visitor);
    app.get('/api/visitor/count', visitorController.countVisitor);
    app.get('/api/visitor/date', visitorController.getVisitorOneDate);
}