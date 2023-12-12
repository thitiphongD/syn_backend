const express = require('express');
const db = require('./db/connect');
const app = express();
const port = process.env.PORT || 3000;

const healthCheck = require('./routes/healthcheck.route');
const user = require('./routes/user.route');
const table = require('./routes/table.route');

require("dotenv").config();
app.use(express.json());

healthCheck(app);
user(app);
table(app);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})