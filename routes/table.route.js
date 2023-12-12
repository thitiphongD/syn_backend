const tableController = require('../controllers/table.controller');

module.exports = (app) => {
    app.post('/new-table', tableController.createTable);
    app.get('/tables', tableController.getAllTable);
    app.get('/table/:id', tableController.getTable);
    app.put('/table/:id', tableController.changeTableName);
    app.delete('/table/:id', tableController.deleteTable);
}