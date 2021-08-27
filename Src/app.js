require('dotenv').config();

const { join } = require('path');

const express = require('express');
const compression = require('compression');
const router = require('./Routes');

const app = express();

app.set('port', process.env.PORT || 3000);
app.disabled('x-powered-by');

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'Public')));
app.use(router);

module.exports = app;
