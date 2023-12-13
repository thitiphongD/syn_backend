const counterVisitWebsiteController = require('../controllers/counterVisitWebsite.controller');

module.exports = (app) => {
    app.get('/counter', counterVisitWebsiteController.counterVisit)
}