const visitorController = require('../controllers/visitor.controller');
const swaggerSpec = require('../swagger');
const swaggerUi = require('swagger-ui-express');


module.exports = (app) => {
    app.post('/api/visitor', visitorController.visitor);
    app.get('/api/visitor/count', visitorController.countVisitor);
    app.get('/api/visitor/date', visitorController.getVisitorOneDate);
    app.get('/api/visitor/device/:device', visitorController.selectByDevice);
    app.get('/api/visitor/browser/:browser', visitorController.selectByBrowser);
    app.get('/api/visitor/times/:startTime/:endTime', visitorController.selectBetweenTime);
    app.delete('/api/visitor/:id/delete', visitorController.deleteVisitor);
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

/**
 * @swagger
 * tags:
 *   name: Visitors
 *   description: API operations for managing visitors
 * /api/visitor:
 *   post:
 *     summary: Add a new visitor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ipAddress:
 *                 type: string
 *               device:
 *                 type: string
 *               browser:
 *                 type: string
 *     responses:
 *       201:
 *         description: Visitor saved successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Visitor saved successfully
 *               visitor:
 *                 _id: "5f8747e77a14132d74fde5a7"
 *                 ipAddress: "192.168.1.1"
 *                 device: "Desktop"
 *                 browser: "Chrome"
 *                 accessedAt: "2023-12-15T12:30:00.000Z"
 *       500:
 *         description: Internal server error
 * /api/visitor/count:
 *   get:
 *     summary: Get the count of all visitors
 *     responses:
 *       200:
 *         description: Visitor count retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Visitor count retrieved successfully
 *               visitorCount: 10
 *               visitors:
 *                 - _id: "5f8747e77a14132d74fde5a7"
 *                   ipAddress: "192.168.1.1"
 *                   device: "Desktop"
 *                   browser: "Chrome"
 *                   accessedAt: "2023-12-15T12:30:00.000Z"
 *       500:
 *         description: Internal server error
 * /api/visitor/date:
 *   get:
 *     summary: Get visitors for a specific date
 *     parameters:
 *       - in: query
 *         name: date
 *         required: true
 *         description: Date in the format YYYY-MM-DD
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Visitors retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Visitors retrieved successfully
 *               visitors:
 *                 - _id: "5f8747e77a14132d74fde5a7"
 *                   ipAddress: "192.168.1.1"
 *                   device: "Desktop"
 *                   browser: "Chrome"
 *                   accessedAt: "2023-12-15T12:30:00.000Z"
 *               count: 5
 *       400:
 *         description: Bad request, please provide the date parameter
 *       500:
 *         description: Internal server error
 * /api/visitor/device/{device}:
 *   get:
 *     summary: Get visitors by device
 *     parameters:
 *       - in: path
 *         name: device
 *         required: true
 *         description: Device type
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Visitors retrieved successfully by device
 *         content:
 *           application/json:
 *             example:
 *               message: Visitors retrieved successfully by Desktop
 *               visitorCount: 3
 *               visitors:
 *                 - _id: "5f8747e77a14132d74fde5a7"
 *                   ipAddress: "192.168.1.1"
 *                   device: "Desktop"
 *                   browser: "Chrome"
 *                   accessedAt: "2023-12-15T12:30:00.000Z"
 *       500:
 *         description: Internal server error
 * /api/visitor/browser/{browser}:
 *   get:
 *     summary: Get visitors by browser
 *     parameters:
 *       - in: path
 *         name: browser
 *         required: true
 *         description: Browser type
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Visitors retrieved successfully by browser
 *         content:
 *           application/json:
 *             example:
 *               message: Visitors retrieved successfully by Chrome
 *               visitorCount: 7
 *               visitors:
 *                 - _id: "5f8747e77a14132d74fde5a7"
 *                   ipAddress: "192.168.1.1"
 *                   device: "Desktop"
 *                   browser: "Chrome"
 *                   accessedAt: "2023-12-15T12:30:00.000Z"
 *       500:
 *         description: Internal server error
 * /api/visitor/times/{startTime}/{endTime}:
 *   get:
 *     summary: Get visitors between specified times
 *     parameters:
 *       - in: path
 *         name: startTime
 *         required: true
 *         description: Start time in ISO format (e.g., 2023-12-15T00:00:00Z)
 *         schema:
 *           type: string
 *       - in: path
 *         name: endTime
 *         required: true
 *         description: End time in ISO format (e.g., 2023-12-15T23:59:59Z)
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Visitors retrieved successfully between times
 *         content:
 *           application/json:
 *             example:
 *               message: Visitors retrieved successfully between times
 *               visitorCount: 4
 *               visitors:
 *                 - _id: "5f8747e77a14132d74fde5a7"
 *                   ipAddress: "192.168.1.1"
 *                   device: "Desktop"
 *                   browser: "Chrome"
 *                   accessedAt: "2023-12-15T12:30:00.000Z"
 *       500:
 *         description: Internal server error
 * /api/visitor/{id}/delete:
 *   delete:
 *     summary: Delete a visitor by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the visitor to be deleted
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Delete visitor success
 *         content:
 *           application/json:
 *             example:
 *               message: Delete visitor success
 *               visitor:
 *                 _id: "5f8747e77a14132d74fde5a7"
 *                 ipAddress: "192.168.1.1"
 *                 device: "Desktop"
 *                 browser: "Chrome"
 *                 accessedAt: "2023-12-15T12:30:00.000Z"
 *       404:
 *         description: Visitor not found
 *       500:
 *         description: Internal server error
 */
