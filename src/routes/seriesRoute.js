const express = require('express');
const { getAllSeries } = require('../controller/seriesController');
const route = express.Router();
const controller = require('../controller/seriesController');

route.get('/', controller.getAll);
route.get('/series', controller.getAll);
route.get('/series/:id', controller.getById);
route.get('/series/year/:firstEpisode', controller.getByYear);
route.get('/title', controller.getAllSeries)

module.exports = route;