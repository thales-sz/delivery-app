const express = require('express');
const errorHandler = require('./Middlewares/error.middleware');
const { UserRouter, ValidateRouter, AdminRouter, ProductRouter } = require('./Routes');

const app = express();

app.use(express.json());

app.use('/customer', UserRouter);
app.use('/login', UserRouter);
app.use('/admin', AdminRouter);
app.use('/validate', ValidateRouter);
app.use('/products', ProductRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorHandler);

module.exports = app;