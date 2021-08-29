require('dotenv').config();

const { join } = require('path');

const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const router = require('./Routes');

const app = express();

app.set('port', process.env.PORT || 3000);
app.disabled('X-Powered-By');

app.use(cookieParser());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'Public')));
app.use(router);

module.exports = app;
