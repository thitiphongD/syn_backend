const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const db = require('./db/connect');

const healthCheck = require('./routes/healthcheck.route');
const user = require('./routes/user.route');
const table = require('./routes/table.route');
const visitor = require('./routes/visitor.route');


require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.disable('x-powered-by');

healthCheck(app);
user(app);
table(app);
visitor(app);

app.get('*', (req, res) => {
    res.status(404).json({ message: '404 page not found' })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
