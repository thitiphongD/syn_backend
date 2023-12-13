const tableController = require('../controllers/table.controller');
const swaggerSpec = require('../swagger');
const swaggerUi = require('swagger-ui-express');


module.exports = (app) => {
    app.post('/new-table', tableController.createTable);
    app.get('/tables', tableController.getAllTable);
    app.get('/table/:id', tableController.getTable);
    app.put('/table/:id', tableController.changeTableName);
    app.delete('/table/:id', tableController.deleteTable);
    app.post('/table/reserve/:id', tableController.reserveTable);
    app.post('/reset-tables', tableController.resetAllTables);
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

/**
 * @swagger
 * tags:
 *   name: Tables
 *   description: API operations for tables
 * /table/{id}:
 *   get:
 *     summary: Get a table by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the table
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success response
 *       400:
 *         description: Bad request, invalid ID
 *       404:
 *         description: Table not found
 *       500:
 *         description: Internal server error
 * /tables:
 *   get:
 *     summary: Get all items
 *     responses:
 *       200:
 *         description: Success response
 *       500:
 *         description: Internal server error
 *   post:
 *     summary: Create a new item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully created
 *       400:
 *         description: Bad request, missing or invalid parameters
 *       500:
 *         description: Internal server error
 */
