const visitorController = require('../controllers/visitor.controller');

module.exports = (app) => {
    app.post('/api/visitor', visitorController.visitor);
    app.get('/api/visitor/count', visitorController.countVisitor);
    app.get('/api/visitor/date', visitorController.getVisitorOneDate);
    app.get('/api/visitor/device/:device', visitorController.selectByDevice);
    app.get('/api/visitor/browser/:browser', visitorController.selectByBrowser);
    app.get('/api/visitor/times/:startTime/:endTime', visitorController.selectBetweenTime);
    app.delete('/api/visitor/:id/delete', visitorController.deleteVisitor);
}